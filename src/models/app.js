import { pathToRegexp } from '@/utils'
import * as commonServices from '@/services/common'

function searchTitle(pathname) {
  let routes =  window.g_routes
  let item = routes.find(d => !!d.isHistory)
  routes = item.routes
  let curr = routes.find(d => pathToRegexp(d.path || '/').exec(pathname))
  return curr && curr.title
}
export default {
  namespace: 'app',
  state: {
    platform: 'frontend',
    tags: [],
    cfgs: {}
  },
  subscriptions: {
    setupHistory({ history, dispatch }) {
      const { action, listen } = history 
      return listen(rec => {
        console.log('aaa')
        // dispatch({ type: 'fetchCfgs'})
        if (!(rec.pathname.includes('user')) && action !== 'REPLACE') {
          let payload = {
            _title: searchTitle(rec.pathname),
            ...rec
          }
          dispatch({ type: 'addHistory', payload })
        }
      })
    }
  },
  effects: {
    *addHistory({ payload }, { put, select }) {
      let _tags = yield select(d => d.app.tags)
      let tags = _tags.concat([], _tags, [payload])
      tags = tags.filter((item, index ,arr) => tags.findIndex(d => d.pathname === item.pathname) === index )
      tags = tags.filter(item => item.pathname !== '/')
      yield put({ type: 'updateState', payload: { tags } })
    },
    *removeHistory({ payload }, { call, put, select }) {
      let { history, item, index } = payload
      let { location } = history
      let _tags = yield select(d => d.app.tags)
      let tags = _tags.filter(d => location.pathname !== d.pathname)
      let nextPath = { pathname: '/' }
      if (location.pathname === item.pathname) {
        index = index === 0 ? index + 1 : index - 1
        console.log('afs', index)
        nextPath = _tags[index] || nextPath 
      }
      history.push(nextPath)
      yield put({ type: 'updateState', payload: { tags } })
       
    },
    *fetchCfgs({}, { put, call}) {
      console.log('aaa', 111)
      let data = yield call(commonServices.mapList)
      let cfgs = Object.keys(data).reduce((obj, key) => { 
        return Object.assign({}, obj, { [key.toUpperCase()]: data[key]})
      }, {})
      yield put({ type: 'updateState', payload: { cfgs } })
    }
  },

  reducers: {
    updateState (state, { payload }) {
      return {
        ...state,
        ...payload,
      }
    },
  },
}
