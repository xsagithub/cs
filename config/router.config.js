export default [
  {
    path: '/user',
    component: '../layouts/User',
    routes: [
      { path: '/user/login', component: './user/login' },
      { path: '/user/login/admin', component: './user/login', ignore: true },
      { path: '/user/register', component: './user/register' },
      { path: '/user/forgetPassword', component: './user/forgetPassword' },
    ]
  }, {
    path: '/', 
    component: '../layouts/Baisc', 
    isHistory: true,
    Routes: ['src/pages/authorization.js'],
    routes: [
      { path: '/', redirect: '/dashboard' },
      { path: '/offer/:offer_id', component: './offer/detail', title: 'Offer detail' },
      { path: '/offer/add', component: './offer/add', title: 'Offers Add'},
      { path: '/offers/creatives', component: './offer/list', title: 'Offers Creatives' },
      { path: '/offers/list', component: './offer/list', title: 'Offers List' },
      { path: '/offers', component: './offer/list', title: 'Offers' },
      { path: '/test', component: './test/index.js', title: '测试页面' },
    ]
  },
  
]