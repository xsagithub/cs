import './styles.less'
import React from 'react'
import PropTypes from 'prop-types'
import Con from './config'
import { Select, DatePicker, Button, Form } from '@/components'
import Search from './Search'

let { RangePicker } = DatePicker
let { Option } = Select
let options = []  // 对外参数

class FormList extends React.Component {
  // reset Button
  clear = option => {
    const { label, id } = option
    return (
      <Form.Item key={id}>
        <Button className="clear" onClick={this.resetFields}>{ label }</Button>
      </Form.Item>
    )
  }

  // 日期组件
  date = option => {
    const { id, label, options } = option
    const { getFieldDecorator } = this.props.form

    return (
      <div key={id} className="range-box">
        <Form.Item label={label}>
          {
            getFieldDecorator(id)(
              <RangePicker
                ranges={ options }
              />
            )
          }
        </Form.Item>
      </div>
    )
  }

  // 按钮列表
  getButtons = () => {
    const { buttonList } = this.props
    if (!buttonList) {
      return false
    } 
    return buttonList.map(option => this[option.type](option))
  }

  handleSubmit = e => {
    e.preventDefault()
    const { onSubmit } = this.props
    onSubmit && onSubmit(options)
  }

  mapData = () => {
    const { dataSource } = this.props
    return dataSource.map(option => this[option.type](option))
  }

  // Select 组件
  select = option => {
    let { getFieldDecorator } = this.props.form
    let { options, id, label, placeholder, disabled=false, cb, defaultValue, mode='' } = option
    let sStyle = { 
      width: Con.sw, 
      height: Con.sh 
    }
console.log( defaultValue, 1111111 )
    mode = mode && Con.multiple

    const prefixSelector = getFieldDecorator(id, {
      initialValue: defaultValue,
    })(
      <Select 
        placeholder={placeholder} 
        style={sStyle} 
        mode={mode}
        disabled={disabled}
      >
        { options.map(ops => 
          <Option key={ops.value} value={ops.name}>
            { cb(ops.name) }
          </Option>
        )}
      </Select>
    )

    return (
      <div className="option-box" key={id}>
        <Form.Item label={label}>
          { prefixSelector }
        </Form.Item>
      </div>
    )
  }

  // Submit Button
  submit = option => {
    const { label, id } = option
    return (
      <Form.Item key={id}>
        <Button type="primary" className="submit" htmlType="submit">{ label }</Button>
      </Form.Item>
    )
  }

  // 搜索
  onSearch = () => {
    console.log( 'search ')
  }

  search = option => {
    const { getFieldDecorator } = this.props.form
    const { label, id, placeholder, defaultValue } = option
    const sStyle = { 
      width: Con.sw, 
      height: Con.sh 
    }

    const prefixSelector = getFieldDecorator(id, {
      initialValue: defaultValue,
    })(
      <Search
        style={sStyle}
        placeholder={placeholder}
        option={option}
        onSearch={this.onSearch}
      />
    )

    return (
      <div className="search" key={id}>
        <Form.Item label={label}>
          { prefixSelector }
        </Form.Item>
      </div>
    )

  }

  // 重置表单
  resetFields = e => {
    this.props.form.resetFields()
    // this.handleSubmit(e)
  }

  render () {
    return (
      <div className="common-filter">
        <Form layout="inline" onSubmit={this.handleSubmit} className="form">
          { this.mapData() }
          { this.getButtons() }
        </Form>
      </div>
    )
  }
}

// 表单默认值
const createConfig = {
  name: 'filter',
  mapPropsToFields({ values={} }) {
    const params = {}
    for (let [key, value] of Object.entries(values)) {
      params[key] = Form.createFormField({
        value,
      })
    }
    console.log( params, 999 )
    return params
  },
  onValuesChange(props, changedValues, allValues) {
    const { onChange, } = props
    options = allValues
    console.log( changedValues, 1 )
    onChange(allValues) // 格式化 tags 数据
  },
}

const Forms = Form.create(createConfig)(FormList)

export { Forms }

FormList.propTypes = {
  dataSource: PropTypes.array,
  buttonList: PropTypes.array,
  onSubmit: PropTypes.func,
}
