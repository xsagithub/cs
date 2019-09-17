
function platformInit() {
  const { pathname } = window.location
  let platform = pathname.includes('admin') ?  'backend' :  'frontend'
  sessionStorage.setItem('PLANTFORM', platform) 
}
// 系统常量初始化动作
// function systemInit() {
//   api('common')().then(res => {
//     console.log('res', res)
//   })
// }
// 主动记录用户现在处于哪个平台
platformInit()
