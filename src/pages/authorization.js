import React from 'react'
import Redirect from 'umi/redirect'
const Authorization = (props) => {
  if (sessionStorage.getItem('authorization')) {
    return props.children
  }
  return <Redirect to={sessionStorage.getItem('PLANTFORM') === 'backend' ? '/user/login/admin' : '/user/login'}/>
} 
export default Authorization