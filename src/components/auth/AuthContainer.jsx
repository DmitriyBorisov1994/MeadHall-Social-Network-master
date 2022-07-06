import React from 'react'
import Login from './Login'
import { connect } from 'react-redux'
import { setUserLogin, userValidation, setUserFocus, setPwd, pwdValidation, setPwdFocus } from '../../redux/authReducer'



const AuthContainer = () => {
   return (
      <Login />
   )
}

export default AuthContainer