
// 自定义的平台标识状态
export const PLATFORM = {
  0: '', // 用户平台
  1: '/admin' // 管理平台
}
export const MENUS = [
  { 
    label: 'Dashboard', 
    icon: 'dashboard', 
    key: '/dashboard', 
  }, 
  { 
    label: 'Offers', 
    icon: 'copy', 
    key: '/offers', 
    children: [
      { label: 'Offers', key: '/', rule: 'frontend' }, 
      { label: 'Offers', key: '/list', rule: 'backend' }, 
      { label: 'Creatives', key: '/creatives', rule: 'backend' }
    ]
  }, 
  { 
    label: 'Reports', 
    icon: 'fund', 
    key: '/reports',
    children: [
      { label: 'Summary Report', key: '/summary', }, 
      { label: 'Order Report', key: '/order' },
      { label: 'Bouns Report', key: '/bouns' },
    ]
  }, 
  { 
    label: 'Affiliates', 
    icon: 'rollback', 
    key: '/affiliates',
    rule: 'backend',
  }, 
  { 
    label: 'Domain', 
    icon: 'global', 
    key: '/domain'
  },
  {
    label: 'Billing', 
    icon: 'user', 
    key: '/billing',
    rule: 'backend',
  },
  { 
    label: 'System Users', 
    icon: 'user', 
    key: '/member', 
    rule: 'backend',
    children: [
      { label: 'User List', key: '/' },
      { label: 'User Add', key: '/add' }
    ]
  },
  { 
    label: 'Postbacks', 
    icon: 'rollback', 
    key: '/postbacks',
    rule: 'frontend',
    children: [
      { label: 'Postbacks', key: '/' },
      { label: 'Global Postback', key: '/gPostback' },
    ] 
  }, 
  {
    label: 'Payouts', 
    icon: 'user', 
    key: '/payouts',
    rule: 'frontend',
  },
]