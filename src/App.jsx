import Profile from "./components/Profile/Profile";
import { Route, Routes, Navigate } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import SettingsComponent from "./components/SettingsComponent/SettingsComponent";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavContainer from "./components/Nav/NavContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Header from "./components/Header/Header";
import AuthContainer from "./components/auth/AuthContainer";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";



const App = ({ isLogined }) => {

  let navigate = useNavigate();

  useEffect(() => {
    isLogined ? navigate("/profile/1", { replace: true }) : navigate("/login/", { replace: true })
  }, [isLogined])

  return (
    <>
      <Header />
      {isLogined && <NavContainer />}
      <Routes>
        <Route
          path="/login/*"
          element={<AuthContainer />}
        />
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
