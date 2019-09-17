import './styles.less'
import React, { PureComponent } from 'react'
import { is } from '@/utils'
import { Form, Input, Select, Checkbox, Button } from '../'
import InputGroup from './InputGroup'
import Verification from './Verification'
import Upload from './Upload';
import { scheme } from './cfgs'
const { Item, create, createFormField } = Form

const exclusions = ['Button', 'Text', 'Submit', 'Upload'] // 数据字典忽略的类型

export default
@create({
  mapPropsToFields: ({ columns, value = {} }) => {
    return is.array(columns) ? columns.reduce((prev, next) => {
      return exclusions.includes(next.type) ? prev 
      : Object.assign({}, prev, { 
        [next.id]: createFormField({ value: value[next.id] }) 
      })
    }, {}) : {}
  },
  onValuesChange: (props, changedValues, allValues) => {
    props.onChange && props.onChange(allValues, changedValues)
  }
})
class Sheet extends PureComponent {
  static defaultProps = {
    layout: 'horizontal',
    labelCol: 6,
    wrapperCol: 14
  }
  constructor (props) {
    super(props)
    this.getFieldDecorator = props.form.getFieldDecorator
  }
  getResult(flag) {
    const { form } = this.props
    return new Promise((resolve, reject) => {
      form.validateFields((err, values) => {
        if (!err) resolve(values)
        reject(err)
      })
    })
    
  }
  // 处理自定义验证
  onValidator (optics, parameter) {
    const { value, callback } = parameter 
    if (is.existy(optics.verify)) {
      // 判断是不是函数
      if (is.function(optics.verify)) {
        let data = this.props.form.getFieldsValue()
        let result = optics.verify(value, data)
        if (!result || is.not.function(result.then)) {
          // 不是promise 时，log出错误提示
          console.error('Error:If verify a function, it must return a promise')
          return 
        } else {
          result.then(() => callback()).catch(err => callback(err))
        }
      } else if (is.array(optics.verify) && optics.verify.length >= 1) {
        // 内置一些常用的验证规则
        let [rule, message] = optics.verify
        if (rule in scheme) {
          scheme[rule](value) ? callback() : callback((message ? message : `This field ${optics.id} was not validated`))
        } else {
          callback('The incoming validation rule does not exist')
        }
      } else return
    } else {
      callback()
    }
  }
  renderChild ({ type, option, props, ...rest }) {
    switch (type) {
      case 'Input':
        return <Input {...props} />
      case 'Password': 
        return <Input {...props} type="password" />
      case 'TextArea':
        return <Input.TextArea {...props} />
      case 'InputGroup': 
        return <InputGroup {...props} />
      case 'Verification': 
        return <Verification {...props}/>
      case 'Checkbox':
        return <Checkbox>{rest.label}</Checkbox>
      case 'Select':
        return (
          <Select {...props}>
            {
              is.array(option) && option.map(({ name, value, ...other }) => (
                <Select.Option key={value} value={value} {...other}>{name}</Select.Option>
              ))
            }
          </Select>
        )
      case 'Upload':
         return <Upload {...props}/>
      case 'Button': 
        return <Button type="primary" {...props}>{rest.text || rest.label}</Button>
      case 'Submit':
        return <Button type="primary" block={true} {...props}>{rest.text || rest.label}</Button>
      case 'Text': 
        return <span>{rest.text}</span>
      case 'Hiden':
        return null
      default:
        return null
    }
  }
  // 统一设置field字典
  doFieldDecorator(item) {
    return this.getFieldDecorator(String(item.id), {
      validateFirst: true,
      rules: [
        { 
          required: is.existy(item.required), 
          message: is.string(item.required) ? item.required : `Please enter the ${item.id} content` 
        }, {
          validator: (rule, value, callback) => this.onValidator(item, {rule, value, callback})
        },
      ]
    })(this.renderChild(item))
  }
  renderItem = (item, idx) => {
    const { labelCol, wrapperCol, layout } = this.props
    const special = ['Checkbox', 'Submit'].includes(item.type)
    const props = layout === 'vertical' ? {} : {
      labelCol: { span: labelCol },
      wrapperCol: special  ? { span: wrapperCol, offset: labelCol } : { span: wrapperCol }
    }
    return (
      !item.hiden && 
      (<Item 
        key={item.id} 
        label={special ? undefined : item.label}
        {...props} 
      >
        {
          exclusions.includes(item.type) ? this.renderChild(item) : this.doFieldDecorator(item)
        }
      </Item>)
    )
  }
  render () {
    const { columns, layout } = this.props
    return (
      <Form layout={layout}>
        {
          columns.map(this.renderItem)
        }
      </Form>
    )
  }
}