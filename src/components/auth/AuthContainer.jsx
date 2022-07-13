import React, { useEffect } from 'react'
import Auth from './Auth'
import { connect } from 'react-redux'
import { setUserLogin, userValidation, setPwd, pwdValidation, setMatchPwd, matchPwdValidation, setSuccess } from '../../redux/authReducer'

let mapStateToProps = (state) => {
   return {
      login: state.auth.login,
      validName: state.auth.validName,
      pwd: state.auth.pwd,
      validPwd: state.auth.validPwd,
      matchPwd: state.auth.matchPwd,
      validMatch: state.auth.validMatch,
      success: state.auth.success
   }
}

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const AuthContainer = ({ login, validName, setUserLogin, userValidation,
   pwd, setPwd, validPwd, pwdValidation,
   matchPwd, setMatchPwd, validMatch, matchPwdValidation,
   success, setSuccess }) => {

   const onEnterLogin = (loginValue) => {
      setUserLogin(loginValue)
   }

   const onEnterPwd = (pwdValue) => {
      setPwd(pwdValue)
   }

   const onEnterMatch = (matchValue) => {
      setMatchPwd(matchValue)
   }

   const onSuccess = () => {
      setSuccess(true)
   }

   useEffect(() => {
      userValidation(USER_REGEX.test(login))
   }, [login])

   useEffect(() => {
      pwdValidation(PWD_REGEX.test(pwd))
      matchPwdValidation(pwd === matchPwd)
   }, [pwd, matchPwd])

   return (
      <Auth
         validName={validName}
         validPwd={validPwd}
         validMatch={validMatch}
         onEnterLogin={onEnterLogin}
         onEnterPwd={onEnterPwd}
         onEnterMatch={onEnterMatch}
         login={login}
         pwd={pwd}
         matchPwd={matchPwd}
         success={success}
         onSuccess={onSuccess}
      />
   )
}

export default connect(mapStateToProps, {
   setUserLogin,
   userValidation,
   setPwd,
   pwdValidation,
   setMatchPwd,
   matchPwdValidation,
   setSuccess
})(AuthContainer)