function addEvent (el, event, handle, capture) {
  //包装函数做处理  用于取消函数和this指向问题
  el["event"+event] = handle

  //先判断浏览器是否为主流浏览器
  if (el.addEventListener){
    el.addEventListener(event, el["event"+event], capture)

  }else if (el.attachEvent){
    el["event"+event] = function () {
      handle.call(el, window.event)
    }
    el.attachEvent("on"+event, el["event"+event])
  }
}

//注销事件
function eventUnbind (el, event, capture) {
  if (el.removeEventListener) {
    el.removeEventListener(event,el["event"+event], capture)

  } else if (el.detachEvent) {
    el.detachEvent("on"+event, el["event"+event])
  }
}

function pvuv (key, op) {
  new Image().src = `${op.url}?key=${key}&time=${new Date().getTime()}`
}

function statement (op) {
  const observe = new MutationObserver(function (mutations, observe) {
    const dataAttr = op.dataAttr || 'data-stat'
    const all = [...document.getElementsByTagName('*')]
    all.forEach(el => {
      const attr = el.getAttribute(dataAttr)
      if (attr) {
        const { key, act = 'click' } = JSON.parse( attr )
        eventUnbind(el, act)
        addEvent(el, act, pvuv(key, op))
      }
    })
  })
  
  observe.observe(document.body, { childList: true, subtree: true })
}

// 手动埋点
function manual (op) {
  const { key, url } = op
  new Image().src = `${url}?key=${key}&time=${new Date().getTime()}`
}



const pvUv = {
  statement,  // 声明式
  manual,  // 手动
}

export default pvUv