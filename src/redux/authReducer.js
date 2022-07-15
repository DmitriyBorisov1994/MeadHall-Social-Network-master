const SET_USER_LOGIN = "SET_USER_LOGIN";
const USER_VALIDATION = "USER_VALIDATION";
const SET_PWD = "SET_PWD";
const PWD_VALIDATION = "PWD_VALIDATION";
const SET_MATCH_PWD = "SET_MATCH_PWD";
const MATCH_PWD_VALIDATION = "MATCH_PWD_VALIDATION";
const SET_SUCCESS = 'SET_SUCCESS'

let initialState = {
   login: '',
   validLogin: false,
   pwd: '',
   validPwd: false,
   matchPwd: '',
   validMatch: false,
   success: false
}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USER_LOGIN: return { ...state, login: action.login }
      case USER_VALIDATION: return { ...state, validLogin: action.validLogin }
      case SET_PWD: return { ...state, pwd: action.pwd }
      case PWD_VALIDATION: return { ...state, validPwd: action.validPwd }
      case SET_MATCH_PWD: return { ...state, matchPwd: action.matchPwd }
      case MATCH_PWD_VALIDATION: return { ...state, validMatch: action.validMatch }
      case SET_SUCCESS: return { ...state, success: action.isSuccess }
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
      validLogin: isValid
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
export const setSuccess = (isSuccess) => {
   return {
      type: SET_SUCCESS,
      isSuccess
   }
}

export default authReducer