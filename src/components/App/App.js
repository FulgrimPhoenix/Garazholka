import logo from "../../logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { NowView } from "../DataTime.js";
import { Header } from "../Header/Header.js";
import { constants } from "../../utils/constants.js";
import { Main } from "../Main/Main.js";
import { Intro } from "../Intro/Intro.js";
import { Route, Routes } from "react-router-dom";
import { Page } from "../Page/Page.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.js";
import { Register } from "../Register/Register.js";
import { Login } from "../Login/Login.js";
import { Profile } from "../Profile/Profile.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentHeaderTitle, setCurrentHeaderTitle] = useState('Профиль')
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Header constants={constants} title={currentHeaderTitle} />
            <Page />
          </>
        }
      >
        <Route
          index
          element={
            <Main>
              <Intro >
            {<NowView interval={1000} />}
          </Intro> 
            </Main>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/xs" />
          }
        >
          <Route path="/profile" element={<Profile profileData={constants.profile} />} />
        </Route>
      </Route>

      <Route
        path="/signup"
        element={
          <Register
            registerFormData={constants.registerFormData}
            // handleSetIsLoggedIn={handleSetIsLoggedIn}
          />
        }
      />
      <Route
        path="/signin"
        element={
          <Login
            loginFormData={constants.loginFormData}
            // handleSetIsLoggedIn={handleSetIsLoggedIn}
          />
        }
      />
    </Routes>
  );
}

export default App;
