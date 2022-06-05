const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
   users: [],
   isFetching: true
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
      case TOGGLE_IS_FETCHING: {
         return { ...state, isFetching: action.isFetching }
      }

      default: return state
   }
};
export default usersReducer

export const followActionCreator = (userId) => {
   return {
      type: FOLLOW,
      userId
   };
};
export const unfollowActionCreator = (userId) => {
   return {
      type: UNFOLLOW,
      userId
   };
};

export const setUsersActionCreator = (users) => {
   return {
      type: SET_USERS,
      users
   };
};
export const toggleIsFetchingActionCreator = (isFetching) => {
   return {
      type: TOGGLE_IS_FETCHING,
      isFetching
   };
};