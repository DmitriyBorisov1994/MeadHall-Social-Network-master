const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
   dialogsData: [
      {
         id: "1",
         name: "Dmitriy",
         imgURL:
            "https://i.pinimg.com/564x/8e/ef/f7/8eeff7ef9da0604670e887a6c606abc2.jpg",
      },
      {
         id: "2",
         name: "Julia",
         imgURL:
            "https://i.pinimg.com/564x/29/45/e0/2945e0d4b7f168b561baa8218e17c887.jpg",
      },
      {
         id: "3",
         name: "Roman",
         imgURL:
            "https://i.pinimg.com/564x/4f/67/09/4f670998614eebafe0df940808c8882d.jpg",
      },
   ],
   messagesData: [
      { id: "1", message: "Hi" },
      { id: "2", message: "How are you?" },
      { id: "3", message: "Fine. And you?" },
      { id: "4", message: "Me to." },
   ],
   newMessageText: "",
}

const dialogsReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_MESSAGE:
         let newMessage = {
            id: 5,
            message: state.newMessageText,
         };
         return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
            newMessageText: ''
         }

      case UPDATE_NEW_MESSAGE_TEXT:
         return {
            ...state,
            newMessageText: action.newMessageText
         }

      default: return state
   }
};

export const addMessageActionCreator = () => {
   return {
      type: ADD_MESSAGE,
   };
};

export const updateNewMessageTextActionCreator = (text) => {
   return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newMessageText: text,
   };
};

export default dialogsReducer