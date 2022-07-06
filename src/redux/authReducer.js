const SET_USER_LOGIN = "SET_USER_LOGIN";
const USER_VALIDATION = "USER_VALIDATION";
const USER_FOCUS = "USER_FOCUS";
const SET_PWD = "SET_PWD";
const PWD_VALIDATION = "PWD_VALIDATION";
const PWD_FOCUS = "PWD_FOCUS";
const SET_MATCH_PWD = "SET_MATCH_PWD";
const MATCH_PWD_VALIDATION = "MATCH_PWD_VALIDATION";
const MATCH_PWD_FOCUS = "MATCH_PWD_FOCUS";
const IS_SUCCESS = 'IS_SUCCESS'

let initialState = {
   login: '',
   validName: false,
   userFocus: false,
   pwd: '',
   validPwd: false,
   pwdFocus: false,
   matchPwd: '',
   validMatch: false,
   matchFocus: false,
   success: false
}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USER_LOGIN: return { ...state, login: action.login }
      case USER_VALIDATION: return { ...state, validName: action.nameIsValid }
      case USER_FOCUS: return { ...state, userFocus: action.userIsFocused }
      case SET_PWD: return { ...state, pwd: action.pwd }
      case PWD_VALIDATION: return { ...state, validPwd: action.pwdIsValid }
      case PWD_FOCUS: return { ...state, pwdFocus: action.pwdIsFocused }
      case SET_MATCH_PWD: return { ...state, matchPwd: action.matchPwd }
      case MATCH_PWD_VALIDATION: return { ...state, validMatch: action.matchIsValid }
      case MATCH_PWD_FOCUS: return { ...state, matchFocus: action.matchIsFocused }
      case IS_SUCCESS: return { ...state, success: action.isSuccess }
      default: return state
   }

};

export const setUserLogin = (login) => {
   return {
      type: SET_USER_LOGIN,
      login
   };
};

export const userValidation = (isValid) => {
   return {
      type: USER_VALIDATION,
      validName: isValid
   }
}

export const setUserFocus = (isFocused) => {
   return {
      type: USER_FOCUS,
      userFocus: isFocused
   }
}

export const setPwd = (pwd) => {
   return {
      type: SET_PWD,
      pwd,
   };
};

export const pwdValidation = (isValid) => {
   return {
      type: PWD_VALIDATION,
      validPwd: isValid
   }
}

export const setPwdFocus = (isFocused) => {
   return {
      type: USER_FOCUS,
      pwdFocus: isFocused
   }
}

export const setMatchPwd = (matchPwd) => {
   return {
      type: SET_MATCH_PWD,
      matchPwd,
   };
};

export const matchPwdValidation = (isValid) => {
   return {
      type: MATCH_PWD_VALIDATION,
      validMatch: isValid
   }
}

export const setMatchPwdFocus = (isFocused) => {
   return {
      type: MATCH_PWD_FOCUS,
      matchFocus: isFocused
   }
}

export default authReducer