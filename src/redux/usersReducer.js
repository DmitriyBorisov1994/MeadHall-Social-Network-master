import { fetchUsers } from "../api/axios";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_USERS_FETCHING = "TOGGLE_IS_USERS_FETCHING"
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT"

let initialState = {
   users: [],
   isUsersFetching: true,
   totalCount: 0
}

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: true }
               }
               return u
            })
         }

      case UNFOLLOW:
         return {
            ...state,
            users: state.users.map(u => {
               if (u.id === action.userId) {
                  return { ...u, followed: false }
               }
               return u
            })
         }

      case SET_USERS: {
         return { ...state, users: [...action.users] }
      }
      case TOGGLE_IS_USERS_FETCHING: {
         return { ...state, isUsersFetching: action.isUsersFetching }
      }
      case SET_TOTAL_COUNT: {
         return { ...state, totalCount: action.totalCount }
      }

      default: return state
   }
};
export default usersReducer

export const follow = (userId) => {
   return {
      type: FOLLOW,
      userId
   };
};
export const unfollow = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   };
};

export const setUsers = (users) => {
   return {
      type: SET_USERS,
      users
   };
};
export const toggleIsUsersFetching = (isUsersFetching) => {
   return {
      type: TOGGLE_IS_USERS_FETCHING,
      isUsersFetching
   };
};
export const setTotalCount = (totalCount) => {
   return {
      type: SET_TOTAL_COUNT,
      totalCount
   };
};
//thunk-creator
export const getUsers = () => {
   return /*thunk*/(dispatch) => {
      dispatch(toggleIsUsersFetching(true))
      fetchUsers()
         .then(data => {
            dispatch(toggleIsUsersFetching(false))
            dispatch(setUsers(data))
            dispatch(setTotalCount(data.length))
         });
   }
}