const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TITLE = "UPDATE-NEW-POST-TITLE"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_POSTS = "SET_POSTS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"
const SET_TOTAL_POSTS_COUNT = "SET_TOTAL_POSTS_COUNT"
const SET_INFO_DATA = "SET_INFO_DATA"

let initialState = {
   postsData: [],
   pageSize: 10,
   totalPostsCount: 0,
   currentPage: 1,
   infoData: {},
   newPostText: "",
   newPostTitle: ""
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = {
            id: 5,
            body: state.newPostText,
            title: state.newPostTitle,
         };
         return {
            ...state,
            postsData: [newPost, ...state.postsData],
            newPostText: ""
         }


      case UPDATE_NEW_POST_TITLE:
         return {
            ...state,
            newPostTitle: action.newTitle
         }

      case UPDATE_NEW_POST_TEXT:
         return {
            ...state,
            newPostText: action.newText
         }

      case SET_POSTS:
         return { ...state, postsData: [...action.posts] }

      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }

      case SET_TOTAL_POSTS_COUNT:
         return { ...state, totalPostsCount: action.postsCount }

      case SET_INFO_DATA:
         return { ...state, infoData: { ...action.info } }


      default: return state
   }
};
export default profileReducer

export const addPost = () => {
   return {
      type: ADD_POST,
   };
};
export const updateNewPostTitle = (title) => {
   return {
      type: UPDATE_NEW_POST_TITLE,
      newTitle: title,
   };
};
export const updateNewPostText = (text) => {
   return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
   };
};
export const setPosts = (posts) => {
   return {
      type: SET_POSTS,
      posts
   };
};
export const setCurrentPage = (currentPage) => {
   return {
      type: SET_CURRENT_PAGE,
      currentPage
   };
};
export const setTotalPostsCount = (postsCount) => {
   return {
      type: SET_TOTAL_POSTS_COUNT,
      postsCount
   }
}
export const setInfoData = (info) => {
   return {
      type: SET_INFO_DATA,
      info
   }
}