import { pathToRegexp } from '@/utils'
import * as offerServices from '@/services/offer'
import { FILTER, OPERATION, COLUMNS } from '@/constants/offer'
export default {
  namespace: 'offers',
  state: {
    pagination: {},
    list: [],
    filter: [],
    operation: [],
    columns: [],
    sheet: [Date.now().toString(32)],
    sheetValues: {},
    modal: false
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {
        let regexp = pathToRegexp('*/offers/:type?').exec(pathname)
        if (regexp) {
          let type = regexp[2] || 'default'
          let payload = {
            filter: FILTER[type],
            operation: OPERATION[type],
            columns: COLUMNS[type]
          } 
          dispatch({ type: 'updateState', payload })
          dispatch({ type: 'fetchList' })
        } 
      })
    }
  },
  effects: {
    *fetchList({ payload = {} }, { call, put, select }) {
      let { list, ...pagination } = yield call(offerServices.offerList, payload)
      yield put({ type: 'updateState', payload: { pagination, list } })
    },
    *doAddSheet({ payload: index }, { call, put, select }) {
      let _sheet = yield select(d => d.offers.sheet)
      let sheet = [
        ..._sheet.slice(0, index + 1),
        Date.now().toString(32),
        ..._sheet.slice(index + 1, _sheet.length)
      ]
      yield put({ type: 'updateState', payload: { sheet } })
    },
    *doDelSheet({ payload }, { call, put, select }) {
      let { index, id } = payload
      let { sheet: _sheet, sheetValues: _sheetValues } = yield select(d => d.offers)
      let sheet = [
        ..._sheet.slice(0, index),
        ..._sheet.slice(index + 1, _sheet.length)
      ]
      let sheetValues = Object.keys(_sheetValues).reduce((pre, key) => (key === id ? pre : { ...pre, [key]: _sheetValues[key] }), {})
      yield put({ type: 'updateState', payload: { sheet, sheetValues } })
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload }
    }
  },
}
