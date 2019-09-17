import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { formatMessage } from 'umi-plugin-locale'
import { PortalNav, Card, Table, Filter, Operation, Dialog, Sheet } from '@/components'
export default
@connect(({ app, offers }) => ({
  app, 
  offers
}))
class extends PureComponent {
  static contextTypes = {
    protalElement: PropTypes.any
  }
  constructor(props) {
    super(props) 
  }
  onChange = (key) => {
    const { history } = this.props
    history.push(key)
  }
  // 操作按钮处理逻辑
  onOperation = (key) => {
    const { history, dispatch } = this.props
    switch (key) {
      case 'create-offer':
        history.push('/offer/add')
        break
      case 'pending-offer': 
        console.log('你点击了改变offer状态')
        break
      case 'add-creative':
          dispatch({ 
            type: 'offers/updateState', 
            payload: {
              modal: true
            } 
          })   
          break
      default:
        break
    }
  }
  // offer弹框的显示与关闭
  onCancel = () => {
    const { dispatch } = this.props
    dispatch({ type: 'offers/updateState', payload: { modal: false } })    
  }
  onOk = () => {
    console.log('sfsa,', 'as')
  }
  render() {
    const { match, offers }= this.props
    const addSheet = [
      { 
        label: formatMessage({ id: 'offers.list.dialog.add.offer' }), 
        id: 'name', 
        type: 'Input',
        props: {
          placeholder: 'Select the offer(s) to add creative files'
        }
      }, { 
        label: formatMessage({ id: 'offers.list.dialog.add.status' }), 
        id: 'Category', 
        type: 'Input' 
      }, 
      { 
        label: formatMessage({ id: 'offers.list.dialog.add.upload' }), 
        id: 'Country', 
        type: 'Upload' 
      }, 
    ]
    return (
      <>
        {/* <PortalNav
          deploy={[
            { key: '/offers', name: 'Offers' },
            { key: '/offers/creatives', name: 'Creatives' }
          ]}
          activeKey={match.url}
          node={this.context.protalElement}
          onChange={this.onChange}
        /> */}
        <Card>
          <Filter 
            dataSource={offers.filter} 
          />
        </Card>
        <Operation deploy={offers.operation} onClick={this.onOperation}/>
        <Card>
          <Table 
            dataSource={offers.list} 
            columns={offers.columns}
            rowClassName="123"
            pagination={offers.pagination}
          />
        </Card>
        <Dialog
          title="Add Creatives"
          visible={offers.modal}
          onCancel={this.onCancel}
          onOk={this.onOk}
          centered
        >
         <Sheet
            labelCol={4}
            columns={addSheet}
            wrapperCol={18}
         />
        </Dialog>
      </>
    )
  }
}
