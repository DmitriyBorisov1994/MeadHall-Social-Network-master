import Profile from "./components/Profile/Profile";
import { Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import SettingsComponent from "./components/SettingsComponent/SettingsComponent";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Header from "./components/Header/Header";
import AuthContainer from "./components/auth/AuthContainer";



const App = () => {
  return (
    <>
      <Header />
      <AuthContainer />
      <NavContainer />
      <Routes>
        <Route
          path="/profile/:userID"
          element={<Profile />}
        />
        <Route
          path="dialogs/*"
          element={<DialogsContainer />}
        />
        <Route path="news" element={<News />} />
        <Route path="music" element={<Music />} />
        <Route path="settings" element={<SettingsComponent />} />
        <Route
          path="users/"
          element={<UsersContainer />}
        />
      </Routes>
    </>
  );
};

export default App;
