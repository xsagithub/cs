import './styles.less'
import React from 'react'
import { Select } from '@/components'

const { Option } = Select

export default class SearchInput extends React.Component {
  onSearch = value => {
    const { onSearch } = this.props
    onSearch && onSearch(33333333)
    // this.setState({ data: onSearch(value) })
  }

  onChange = value => {
    const { onChange } = this.props
    onChange(value)
    // this.setState({ value })
  }

  render() {
    const { option = [], style  } = this.props
    const options = option.options.map(d => <Option key={d.value} value={d.name}>{d.name}</Option>)

    return (
      <Select
        showSearch
        // value={this.state.value}
        placeholder={this.props.placeholder}
        style={style}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.onSearch}
        onChange={this.onChange}
        notFoundContent={null}
      >
        {options}
      </Select>
    )
  }
}
