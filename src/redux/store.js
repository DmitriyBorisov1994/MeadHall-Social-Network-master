import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";


let store = {
  _state: {
    profilePage: {
      postsData: [
        { id: "1", message: "Hi! How are you?", likesCount: "0" },
        { id: "2", message: "Drinking ale all day", likesCount: "10" },
        { id: "3", message: "Floki is a badass", likesCount: "10" },
      ],
      infoData: {
        name: "Dimych",
        city: "Samara",
        avatar:
          "https://i.pinimg.com/564x/8e/ef/f7/8eeff7ef9da0604670e887a6c606abc2.jpg",
      },
      newPostText: "",
    },
    dialogsPage: {
      dialogsData: [
        {
          id: "1",
          name: "Dimych",
          imgURL:
            "https://i.pinimg.com/564x/8e/ef/f7/8eeff7ef9da0604670e887a6c606abc2.jpg",
        },
        {
          id: "2",
          name: "Iulka",
          imgURL:
            "https://i.pinimg.com/564x/29/45/e0/2945e0d4b7f168b561baa8218e17c887.jpg",
        },
        {
          id: "3",
          name: "Santimetrik",
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
    },
  },
  _callSubscriber() {
    console.log("state changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //паттерн наблюдатель
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber(this._state);
  },
};


export default store;

window.store = store;
