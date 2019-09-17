import React from 'react'
import router from 'umi/router'
import { message, ConfigProvider } from '@/components'
import { persistStore, persistReducer, createTransform } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// session方式存储
import storage from 'redux-persist/lib/storage/session'

message.config({ prefixCls: 'nwd-message' }) // 全局配置 antd message

// 数据持久化 --- 配置
const persistConfig = {
  key: 'network',
  storage,
  whitelist: ['app'],
  transforms: [
    createTransform(
    inboundState => inboundState,
    
    (outboundState, key) => {
      // 将初始化过程存储的平台信息设置到全局的state 中
      if (key === 'app') {
        if (outboundState.platform !== sessionStorage.getItem('PLANTFORM')) {
          outboundState.tags = []
        }
        outboundState.platform = sessionStorage.getItem('PLANTFORM')
      }
      return outboundState
    },
    // 定义需要被转换的reducer
    { whitelist: ['app'] }
    )
  ]
}
// 数据持久化 --- 执行
const persistEnhancer = () => createStore => (reducer, initialState, enhancer) => {
  const store = createStore(persistReducer(persistConfig, reducer), initialState, enhancer);
  const persist = persistStore(store);
  return {...store, persist };
}
// 强化路由加前缀
const intensifyRoutes = (routes, prefix = '/admin', ignore = 'user') => {
  routes.forEach(d => {
    if (d.path && !d.path.includes(ignore)) { 
      if (d.redirect) {
        d.redirect = `${prefix}${d.redirect}`
      } else {
        d.path = `${prefix}${d.path}`
      }
      if (Array.isArray(d.routes)) {
        intensifyRoutes(d.routes)
      }
    }
  })
}
// 运行时配置dva
export const dva = {
  config: {
    extraEnhancers: [persistEnhancer()],
    onReducer: reducer => persistReducer(persistConfig, reducer),
    onError(err) {
      err.preventDefault()
      switch (err.code) {
        case 401:
          message.error(err.msg)
          sessionStorage.removeItem('authorization')
          router.push('/')
          break
        default:
          break;
      }
    }
  }
}

export const patchRoutes = (routes) => {
  if (sessionStorage.getItem('PLANTFORM') === 'backend') {
    intensifyRoutes(routes)
  }
}

// 全局统一的ConfigProvider配置
export const rootContainer = (container) => {
  const providerProps = {
    prefixCls: 'nwd'
  }
  return React.createElement(ConfigProvider, providerProps, container);
}
