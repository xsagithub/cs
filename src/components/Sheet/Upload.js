import React, { PureComponent } from 'react'
import { Upload, Button } from '../'
import axios from 'axios'
export default class extends PureComponent {
  constructor(props) {
    super(props)
  }
  onRequest = (record) => {
    console.log('自定义上传', record)
    const { filename, file, data } = record
    // 将数据转化为自定义的formData
    const formData = new FormData()
    Object.keys(data).forEach(key => {
      formData.append(key, data[key])
    })
    formData.append('token', 'tHx_NFyqZL0AnhocyT3k471GexaWThXZJWbr5xhi:uSl22FjmTQll5O9uG2JdU6j9nGM=:eyJzY29wZSI6ImJsb2ciLCJkZWFkbGluZSI6MTU2NDY1MzAzNn0=')
    formData.append(filename, file)
    console.log('转化上传', formData)
    axios
    .post('http://up.qiniu.com', formData, {
      onUploadProgress: ({ total, loaded }) => {
        // onProgress({ percent: Math.round(loaded / total * 100).toFixed(2) }, file);
      },
    })
  }
  render() {
    return (
      <Upload
        customRequest={this.onRequest}
        showUploadList={false}
      >
        <Button type="primary">Upload</Button>
      </Upload>
    )
  }
}