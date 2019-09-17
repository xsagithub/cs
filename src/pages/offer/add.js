import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'dva'
import { formatMessage } from 'umi-plugin-locale'
import { PortalNav, Card, Sheet, Icon, Operation } from '@/components'

export default
@connect(({ app, offers }) => ({
  app, 
  offers
}))
class extends PureComponent {
  static contextTypes = {
    protalElement: PropTypes.any
  }
  onTabChange = (key) => {
    const { history } = this.props
    history.push(key)
  }
  onAddSheet (index) {
    const { dispatch } = this.props
    dispatch({ type: 'offers/doAddSheet', payload: index })
  }
  onDelSheet(index, id) {
    const { dispatch } = this.props
    dispatch({ type: 'offers/doDelSheet', payload: { index, id } })
  }
  onSheetChange = (sheetValues) => {
    const { dispatch, offers } = this.props
    let payload = { sheetValues: { ...offers.sheetValues, ...sheetValues }}
    dispatch({ type: 'offers/updateState', payload })
  }
  onSubmit = async () => {
    // const { dispatch, sheetValues } = this.props
  
    // console.log('afs', sheetValues)
  }
  render() {
    const { offers }= this.props
    const basicSheet = [
      { label: 'Name', id: 'name', type: 'Input' },
      { label: 'Category', id: 'Category', type: 'Input' }, 
      { label: 'Country', id: 'Country', type: 'Input' }, 
      { label: 'Description', id: 'Description', type: 'TextArea' }, 
      { label: 'Payout', id: 'payout', type: 'Input', props: { prefix: '$'} }, 
      { label: 'Offer Status', id: 'status', type: 'Input' }, 
    ]
    let pageSheet = offers.sheet.map((id, idx) => ({ 
      label: `No.10000${idx + 1}`,
      id: id,
      type: 'InputGroup',
      props: {
        suffix: idx === 0 ? <Icon type="plus" onClick={() => this.onAddSheet(idx, id)} /> 
          : [
            <Icon type="plus" key="plus" onClick={() => this.onAddSheet(idx, id)} />, 
            <Icon type="minus"  key="minus" onClick={() => this.onDelSheet(idx, id)} />
          ]
      }
    }))
    return (
      <>
        <PortalNav 
          node={this.context.protalElement}
          deploy={{ key: '/offers/creative', name: 'Creatives' }}
        />
       <Card title="Basic Information" none-bordered="head">
          <Sheet
            labelCol={4}
            wrapperCol={8}
            value={offers.sheetValues}
            columns={basicSheet}
            onChange={this.onSheetChange}
          />
       </Card>
       <Card title="Offer page" none-bordered="head" data-margin="top">
          <Sheet
            labelCol={4}
            wrapperCol={8}
            columns={pageSheet}
            value={offers.sheetValues}
            onChange={this.onSheetChange}
          />
       </Card>
       <Operation 
          justify="center"
          deploy={[
            { name: formatMessage({ id: 'offer.add.button.submit' }), click: this.onSubmit },
            { name: formatMessage({ id: 'offer.add.button.cancel' }), type: 'default'}
          ]}
        />
      </>
    )
  }
}