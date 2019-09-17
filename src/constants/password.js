import { formatMessage } from 'umi-plugin-locale'
export const passwordCon = [
  { 
    label: formatMessage({ id: 'user.register.label_password' }),
    id: 'password', 
    type: 'Password', 
    verify: (data) => {
      let regex = RegExp(/^(?![\d]+$)(?![a-zA-Z]+$)(?![!#$%^&*]+$)[\da-zA-Z!#$%^&*]{6,20}$/)
      if(!regex.test(data)){
        return Promise.reject(formatMessage({ id: 'common.setPassword' }))
      }else{
        return Promise.resolve()
      }
    },
    required: formatMessage({ id: 'common.enterPassword' }), 
  },
  { 
    label: formatMessage({ id: 'user.register.label_confirmPassword' }),
    id: 'confirmPassword', 
    type: 'Password', 
    verify: (data,result) => {
      if(data !== result.password){
        return Promise.reject(formatMessage({ id: 'common.setCPassword' }))
      }else{
        return Promise.resolve()
      }
    },
    required: formatMessage({ id: 'common.enterCPassword' }), 
  },
]