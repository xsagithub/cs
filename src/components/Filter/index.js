import './styles.less'
import React from 'react'
import PropTypes from 'prop-types'
import Tags from './Tags'
import { Forms } from './FormList'
import Con from './config'

class Filter extends React.Component {
  state = {
    tags: [], // Tags 数据
    defaultValues: [],   // 默认选中表单数据
  }

  onSubmit = options => {
    const { onSubmit } = this.props
    this.settingTags( this.flatTags( this.formatTags(options) ), options )
    onSubmit && onSubmit(this.formatParams(options))
  }

  // 表单切换回调
  onChange = options => {
    const { onSubmit, onChange } = this.props

    // 如果是 Submit 提交
    if (!onSubmit) {
      // 格式化 Tags 数据
      this.settingTags( this.flatTags( this.formatTags(options) ), options )
      // 格式化表单数据
      onChange( this.formatParams(options) )
    }
  }

  formatDate = ([range0, range1]) => ([
    range0.format(Con.format),
    range1.format(Con.format),
  ])

  // 格式化 Tags
  formatTags = (allValues) => {
    const tags = {}
    const { dataSource } = this.props
    dataSource.forEach(({ id, label, type }) => {
      if (allValues[id] && allValues[id].length) {
        tags[label] = type === Con.date ? this.formatDate(allValues[id]) : allValues[id]
      }
    })
    return tags
  }

  // Tags 扁平化
  flatTags = options => {
    let tagsAr = [] // Tag 标签列表
    const append = (v, key) => {
      let object = {}
      // 如果是date 用 - 分割
      object[key] = !isDate(v) ? v : v.join('-')
      tagsAr.push(object)
    }
    // 是否是 date 
    const isDate = value => {
      if (Array.isArray(value)) {
        const ar = value[0].match(/-/g)
        return ar ? ar.length === 2 : false
      }
      return false
    }
    // 格式化日期 去掉HH:MM:SS
    const rmHMS = value => value.map(v => v.split(' ')[0])

    for (let [key, values] of Object.entries(options)) {
      const isTrue = isDate(values)
      
      // 是数组 并且不是 date
      if (Array.isArray(values) && !isTrue) {
        values.forEach(value => append(value, key))

      } else {
        append(isTrue ? rmHMS(values) : values, key)
      }
    }

    return tagsAr
  }

  // 格式化传递给前端的组件参数数据 ( 主要是格式 日期格式 )
  formatParams = allValues => {
    const options = {}
    // 是否是日期
    const isTrue = opt => opt && Array.isArray(opt) && opt[0].format

    for (let [key, value] of Object.entries(allValues)) {
      // 日期有值时进行日期格式化
      options[key] = isTrue(value) ? this.formatDate(value) : value
    }

    return options
  }

  // 删除 tags 数据
  removeTags = (tagLabel, lableValue) => {
    this.setState({
      tags: this.state.tags.filter(v => {
        const [key, value] = Object.entries(v)[0]
        if ((key !== tagLabel) || (value !== lableValue)) {
          return v
        }
        return ''
      })
    })
  }

  // 删除表单选中数据
  removeInputData = (tagLabel, lableValue) => {
    const { defaultValues } = this.state
    const { dataSource } = this.props

    // 过滤掉已删除标签数据
    dataSource.forEach(({ id, type, label }) => {
      if (tagLabel !== label) return false
      // 获取已选中某项表单值的列表 可能是单个值 或 Array
      let pValue = defaultValues[id]
      // 是数组 并且不是 日期
      let isTrue = Array.isArray(pValue) && type !== 'date'
      pValue = isTrue ? pValue.filter(v => v !== lableValue) : undefined
      defaultValues[id] = pValue
    })

    this.setState({ defaultValues })
  }

  // 删除表单数据
  onClose = option => {
    const [tagLabel, lableValue] = Object.entries(option)[0]  // 要删除的 key value
    this.removeInputData(tagLabel, lableValue)
    this.removeTags(tagLabel, lableValue)
  }

  settingTags = (tags, options) => {
    this.setState({
      tags, 
      defaultValues: options,
    })
  }

  tagsHtml = () => {
    const { hideTags } = this.props
    const { tags } = this.state
    return ( !hideTags && tags && tags.length ) ? (
      <div className="taps">
        <div className="taps-box">
          <Tags tags={tags} onClose={this.onClose} />
        </div>
      </div>
    ) : null
  }

  render () {
    const { tags, defaultValues } = this.state
    const { dataSource, buttonList, operating } = this.props
    // 默认按钮
    const defaultButton = !operating ? [
      {
        id: 'Apply0000000',
        label: 'Apply',
        type: 'submit',
      },
      {
        id: 'Clear0000000',
        label: 'Clear',
        type: 'clear',
      },
    ] : null
    
    return (
      <div className="common-filter">
        <Forms
          onSubmit={this.onSubmit}
          onChange={this.onChange}
          buttonList={buttonList || defaultButton}
          dataSource={dataSource}
          settingTags={this.settingTags}
          values={defaultValues}  // 选中列表
          saveTags={tags}
          formatParams={this.formatParams}
        />
        { this.tagsHtml() }
      </div>
    )
  }
}

export { Filter }

Filter.propTypes = {
  dataSource: PropTypes.array,
  buttonList: PropTypes.array,
  onSubmit: PropTypes.func,
}