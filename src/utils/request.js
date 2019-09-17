import axios from 'axios'
import { moment, uuid } from './'
axios.interceptors.response.use(response => {
  return response;
}, error => {
  console.dir(error)
  // window._axiosList = []
  // if (axios.isCancel(error)) {
  //   return Promise.reject(new CustomError(10001))
  // } else {
  //   return Promise.reject(error)
  // }
})

export default function request(endpoint, payload) {
  const authorization = sessionStorage.getItem('authorization')
  return new Promise((resolve, reject) => {
    axios({
      method: 'post',
      baseURL: '/api_v1',
      url: endpoint,
      headers: {
        'Authorization': authorization || '',
        'request_id': `${moment().unix()}-${uuid(8, 16)}`,
        'Accept': 'application/json'
      },
      data: payload
    })
    .then(response => {
      const data = response.data
      if (data.code === 200) {
        resolve(data.result)
      } else {
        reject(data) 
      }
    })
    .catch(err => {
      reject(err)
    })
  })
}