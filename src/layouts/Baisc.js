import './styles.less'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd'
import { connect } from 'dva'
import { Menus, TabNav } from '@/components'
import { MENUS } from '@/constants'
const { Header, Content, Sider } = Layout

export default
@connect(({ app, router }) => ({
  app,
  router
}))
class BasicLayout extends PureComponent {
  static childContextTypes = {
    protalElement: PropTypes.any,
  }
  constructor(props) {
    super(props)
    this.state = {
      protalElement: null
    }
  }
  getChildContext() {
    return { 
      protalElement: this.state.protalElement
    }
  }
  onMenuClick = ({ key, item }) => {
    const { history } = this.props
    history.push(key)
  }
  onTabChange = (item) => {
    const { history } = this.props
    history.replace(item)
  }
  onRemove = (item, index) => {
    const { history, dispatch } = this.props
    const payload = {
      item,
      history,
      index
    }
    dispatch({ type: 'app/removeHistory', payload })
  }
  doIntensify(rule = 'frontend') {
    let prefix = rule === 'frontend' ? '' : '/admin'
    return MENUS.reduce((arr, curr) => {
      if (curr.rule) {
        return curr.rule === rule ? [...arr, {
          ...curr, 
          key: `${prefix}${curr.key}` 
        }] : arr
      } else {
        return Array.isArray(curr.children) ? [ ...arr, {
          ...curr,
          key: `${prefix}${curr.key}`,
          children: curr.children.reduce((pre, next) => (!next.rule || next.rule === rule ? [ ...pre, next ] : pre), [])
        }] : [ ...arr, { 
          ...curr, 
          key: `${prefix}${curr.key}` 
        }]
      }
    }, []).map(({ children, ...item }) => Array.isArray(children) && children.length === 1 ? item : { ...item, children })
  }
  render() {
    const { children, location, app } = this.props
  
    return (
        <Layout className="nwd-custom__layout">
          <Header className="nwd-custom__header">
            <div className="nwd-logo"/>
          </Header>
          <Layout>
            <Sider className="nwd-custom__sider"  collapsedWidth="0">
              <Menus 
                option={this.doIntensify(app.platform)} 
                onClick={this.onMenuClick} 
                selectedKey={location.pathname}
              />
            </Sider>
            <Content>
              <TabNav 
                list={app.tags} 
                selectedKey={location.pathname}
                onChange={this.onTabChange}
                onRemove={this.onRemove}
              />
              <div className="nwd-container">
                <div className="nwd-container__content"> { children }</div>
              </div>
            </Content>
          </Layout>
        </Layout>
      // </ConfigProvider>
    )
  }
}

