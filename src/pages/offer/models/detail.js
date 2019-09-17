import { pathToRegexp } from '@/utils'
import * as offerServices from '@/services/offer'
import { FILTER, OPERATION, COLUMNS } from '@/constants/offer'
export default {
  namespace: 'offer',
  state: {
    pages: [
      {
          "offer_id":6,
          "offer_name":"Wallace Weber",
          "page_download_url":"https://koelpin.com/nihil-in-sed-nulla-qui-beatae-possimus.html"
      },
      {
          "offer_id":8,
          "offer_name":"Miss Lacy Pfeffer DDS",
          "page_download_url":"https://www.hermann.info/nam-labore-impedit-consequatur-qui-vel-sapiente-dolor"
      },
      {
          "offer_id":9,
          "offer_name":"Aron Larson IV",
          "page_download_url":"http://haley.org/hic-qui-a-dicta-molestias-molestiae-qui.html"
      }
    ]
  },
  subscriptions: {
    setup({ history, dispatch }) {
      history.listen(({ pathname }) => {   
        let regexp = pathToRegexp('*/offer/:id').exec(pathname)
        if (regexp) {
          const offer_id = regexp[2]
          dispatch({ type: 'fetchDetail', payload: { offer_id } })
        }        
      })
    }
  },
  effects: {
    *fetchDetail({ payload = {} }, { call, put, select }) {
      let data = yield call(offerServices.offerDetail, payload)
      console.log(data, 'ass')
      // yield put({ type: 'updateState', payload: { pagination, list } })
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
