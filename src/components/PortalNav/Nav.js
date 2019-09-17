import React, { PureComponent } from 'react'
import { Tabs } from '../'
export default class Nav extends PureComponent {
  static defaultProps = {
    deploy: [
      { key: 'b1', name: '测试一' }
    ],
    onChange: () => {}
  }
  onTabClick = (key) => {
    const { onChange, deploy } = this.props
    if (Array.isArray(deploy)) {
      let curr = deploy.find(d => d.key === key)
      curr && typeof curr.click === 'function' ? curr.click() : onChange(key)
    } else {
      onChange(key)
    }
  }
  render() {
    const { deploy, activeKey } = this.props
    if (Object.prototype.toString.call(deploy) !== '[object Object]' &&
     Object.prototype.toString.call(deploy) !== '[object Array]') return null
    return (
      <div className="nwd-protal">
        <Tabs activeKey={activeKey} onTabClick={this.onTabClick}>
          {
            Array.isArray(deploy) ? deploy.map((item, idx) => (
              <Tabs.TabPane 
                tab={item.name} 
                key={item.key || idx} 
              />
            )) : (
              <Tabs.TabPane 
                tab={deploy.name} 
                key={deploy.key} 
              />
            )
          }
        </Tabs>
      </div>

    )
  }
}