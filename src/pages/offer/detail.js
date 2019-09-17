import React, { PureComponent } from 'react'
import { connect } from 'dva'

import { Card, Table, ListView, Icon, BizIcon } from '@/components'

export default 
@connect(({ offer }) => ({
  offer
}))
class extends PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    const { offer } = this.props
    console.log('afs', offer)
   const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
      },
    ]
    const dataSource = [
      {
        key: '1',
        name: '胡彦斌',
        age: 32,
        address: '西湖区湖底公园1号',
      },
      {
        key: '2',
        name: '胡彦祖',
        age: 42,
        address: '西湖区湖底公园1号',
      },
    ]
    return (
      <>
        <Card 
          title="Amazon voucher - (All Devices) - CA - Nonincent"  
          bordered={false} 
          bodyStyle={{ padding: 1}}
        >
          <Card 
            title="Basic Information"  
            bordered={false} 
            none-bordered="top"
          >
            <Table 
              columns={columns}
              dataSource={dataSource}
              pagination={false}
            />
          </Card>
        </Card>
        <Card title="Offer Pages" data-margin="top">
          <ListView
            bordered
            dataIndex="offer_name"
            actions={item => [
              <a href={`www.baidu.com?type=${item.offer_id}`}><Icon type="download" /></a>,
              <a href={`www.baidu.com?id=${item.offer_id}`}><BizIcon type="bounce" /></a>
            ]}
            dataSource={offer.pages}
          />
        </Card>
      </>
    )
  }
}