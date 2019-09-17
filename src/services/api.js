import request from '@/utils/request'
const schema = {
  // 用户平台接口
  frontend: {
    'login': '/user/login',
    'common': '/map',
    'offer-list': '/offer/list',
    'offer-detail': '/offer/detail'
  },
  
  // 用户管理后台接口
  backend: {
    'login': '/admin/login',
    'common': '/map',
    'offer-list': '/offer/list',
    'offer-detail': '/offer/detail'
  }
}

export default function (method) {
  let prefixion = sessionStorage.getItem('PLANTFORM')
  return (data) => request(`/${prefixion}${schema[prefixion][method]}`, data) 
}
