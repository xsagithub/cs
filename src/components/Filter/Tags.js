import React from 'react'
import { BizIcon } from '@/components'

export default class Tips extends React.Component {

  onClose = value => {
    let { onClose } = this.props
    onClose && onClose(value)
  }

  render () {
    const { tags } = this.props

    return (
      <>
        <span className="searched">Searched: </span>
        {
          tags.map((v, k) => {
            const [[key, value]] = Object.entries(v)
            return (
              <div
                key={k}
                className="tag"
              >
                <span>{key}</span>:
                <strong>{value}</strong>
                <em onClick={() => this.onClose(v)}>
                  <BizIcon type="close" />
                </em>
              </div>
            )
          })
        }
      </>
    )
  }
}
