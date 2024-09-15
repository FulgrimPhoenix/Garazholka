import logo from "../../logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { NowView } from "../DataTime.js";
import { Header } from "../Header/Header.js";
import { constants } from "../../utils/constants.js";
import { Main } from "../Main/Main.js";
import { Intro } from "../Intro/Intro.js";
import { NavLink, Route, Routes } from "react-router-dom";
import { Page } from "../Page/Page.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.js";
import { Register } from "../Register/Register.js";
import { Login } from "../Login/Login.js";
import { Profile } from "../Profile/Profile.js";
import { Popup } from "../Popup/Popup.js";
import { EventList } from "../EventList/EventList.js";
import SearchString from "../SearchString/SearchString.js";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentHeaderTitle, setCurrentHeaderTitle] = useState("Профиль");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMarkup, setPopupMarkup] = useState("");
  const [popupOption, setPopupOption] = useState({
    title: "Что хочешь?",
    description: "Выберите интересующие вас мероприятия",
  });
  const [eventList, setEventList] = useState(constants.eventListData.eventList);
  const [filteredEventList, setFilteredEventList] = useState(eventList);
  const [eventStatesList, setEventsStatesList] = useState(
    constants.eventListData.eventList.reduce((acc, el) => {
      acc = [...acc, { id: el.id, selected: false }];
      return acc;
    }, [])
  );
  const [abbreviatedEventStatesList, setAbbreviatedEventStatesList] = useState(
    constants.eventListData.eventList.filter((el, i) => i < 5)
  );

  function handlePopup(state) {
    setIsPopupOpen(state);
  }

  function pastePopupMarkup(markup) {
    setPopupMarkup(markup);
  }

  function changePopupMarkup(calledMarkup) {
    if (calledMarkup === "/eventList") {
      return (
        <SearchString
          searchParameter={"title"}
          itemList={eventList}
          setEventList={setFilteredEventList}
        >
          <EventList
            eventStatesList={eventStatesList}
            eventListData={filteredEventList}
            setEventsStatesList={setEventsStatesList}
          />
        </SearchString>
      );
    }
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavLink to={"/signup"}>Регистрация</NavLink>
            <NavLink to={"/profile"}>Профиль</NavLink>
            <Header constants={constants} title={currentHeaderTitle} />
            <Page />
            {isPopupOpen ? (
              <Popup
                isPopupOpen={isPopupOpen}
                handlePopup={handlePopup}
                popupOption={popupOption}
              >
                {changePopupMarkup(popupMarkup)}
              </Popup>
            ) : (
              ""
            )}
          </>
        }
      >
        <Route
          index
          element={
            <Main>
              <Intro>{<NowView interval={1000} />}</Intro>
            </Main>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn} redirectPath="/xs" />
          }
        >
          <Route
            path="/profile"
            element={
              <Profile
                profileData={constants.profile}
                groupListData={constants.groupListData}
                eventListData={abbreviatedEventStatesList}
                mapBlockData={constants.mapBlockData}
                wayTimePreferenceBlockData={
                  constants.wayTimePreferenceBlockData
                }
                handlePopup={handlePopup}
                pastePopupMarkup={pastePopupMarkup}
                isPopupOpen={isPopupOpen}
                eventStatesList={eventStatesList}
                setEventsStatesList={setEventsStatesList}
                setPopupMarkup={setPopupMarkup}
              />
            }
          />
        </Route>
      </Route>

      <Route
        path="/signup"
        element={
          <>
            <NavLink to={"/signup"}>Регистрация</NavLink>
            <NavLink to={"/profile"}>Профиль</NavLink>
            <Register
              registerFormData={constants.registerFormData}
              // handleSetIsLoggedIn={handleSetIsLoggedIn}
            />
          </>
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
