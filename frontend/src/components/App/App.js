import logo from "../../logo.svg";
import "./App.css";
// import "../../vendor/fonts/fonts.css";
// import "../../vendor/normalize.css";
import React, { useEffect, useState } from "react";
import { NowView } from "../DataTime.js";
import { Header } from "../Header/Header.js";
import { constants } from "../../utils/constants";
import { Main } from "../Main/Main.js";
import { Intro } from "../Intro/Intro.js";
import { NavLink, Route, Routes } from "react-router-dom";
import { Page } from "../Page/Page.js";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute.js";
import { Register } from "../Register/Register.js";
import { Login } from "../Login/Login.js";
import { Profile } from "../Profile/Profile.js";
import { Popup } from "../Popup/Popup.js";
import { EventList } from "../EventList/EventList.tsx";
import { SearchString } from "../SearchString/SearchString.tsx";
import YandexMapApi from "../../utils/YandexMapApi.js";
import { api } from "../../utils/MainApi";
import CustomCalendar from "../CustomCalendar/CustomCalendar";
import { GroupProfile } from "../GroupProfile/GroupProfile";
import { useUrlPathName } from "../../hooks/useUrlPathName";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentHeaderTitle, setCurrentHeaderTitle] = useState("Профиль");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupMarkup, setPopupMarkup] = useState("");
  const [popupOption, setPopupOption] = useState({
    title: "Что хочешь?",
    description: "Выберите интересующие вас мероприятия",
  });
  const [currentPopupMarkupTitle, setCurrentPopupMarkupTitle] = useState("");
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
  const currentPath = useUrlPathName();

  function signup({ email, username, password }) {
    api.signup({ email, username, password }).then((res) => {
      console.log(res);
    });
  }

  function signin({ username, password }) {
    api.signin({ username, password }).then((res) => {
      console.log(res);
    });
  }

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
            currentPath={currentPath}
            isPopupOpen={isPopupOpen}
            eventStatesList={eventStatesList}
            eventList={filteredEventList}
            setEventsStatesList={setEventsStatesList}
          />
        </SearchString>
      );
    } else if (calledMarkup === "/bigMap") {
      return (
        <>
          <YandexMapApi isPopupOpen={isPopupOpen} />
        </>
      );
    } else if (calledMarkup === "/bigCalendar") {
      return (
        <>
          <CustomCalendar />
        </>
      );
    }
  }

  function openPopupWithMoreEvents(e) {
    e.preventDefault();
    setPopupMarkup("/eventList");
    setCurrentPopupMarkupTitle("/eventList");
    handlePopup(true);
  }

  useEffect(() => {
    if (currentPopupMarkupTitle === "/eventList") {
      setPopupOption({
        title: "Что хочешь?",
        description: "Выберите интересующие вас мероприятия",
      });
    } else if (currentPopupMarkupTitle === "/bigMap") {
      setPopupOption({
        title: "Откуда я",
        description:
          "Выберете место откуда вам было бы удобно добираться до мероприятий",
      });
    } else if (currentPopupMarkupTitle === "/bigCalendar") {
      setPopupOption({
        title: "Когда я свободен",
        description:
          "Выберете даты и время в которое вам удобно посещать мероприятия",
      });
    }
  }, [popupMarkup]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavLink to={"/signup"}>Регистрация</NavLink>
            <NavLink to={"/profile"}>Профиль</NavLink>
            <NavLink to={"/group-profile"}>Профиль группы</NavLink>
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
                calendarBlockData={constants.calendarBlockData}
                eventList={abbreviatedEventStatesList}
                mapBlockData={constants.mapBlockData}
                wayTimePreferenceBlockData={
                  constants.wayTimePreferenceBlockData
                }
                handlePopup={handlePopup}
                pastePopupMarkup={pastePopupMarkup}
                eventStatesList={eventStatesList}
                setEventsStatesList={setEventsStatesList}
                setPopupMarkup={setPopupMarkup}
                setCurrentPopupMarkupTitle={setCurrentPopupMarkupTitle}
                openPopupWithMoreEvents={openPopupWithMoreEvents}
                currentPath={currentPath}
              />
            }
          />
        </Route>
        <Route
          path="/group-profile"
          element={
            <GroupProfile
              title={constants.groupProfile.title}
              aboutGroup={constants.groupProfile.aboutGroup}
              avatar={constants.groupProfile.avatar}
              eventList={abbreviatedEventStatesList}
              eventStatesList={eventStatesList}
              setEventsStatesList={setEventsStatesList}
              openPopupWithMoreEvents={openPopupWithMoreEvents}
              currentPath={currentPath}
            />
          }
        />
      </Route>

      <Route
        path="/signup"
        element={
          <>
            <NavLink to={"/signup"}>Регистрация</NavLink>
            <NavLink to={"/profile"}>Профиль</NavLink>
            <NavLink to={"/group-profile"}>Профиль группы</NavLink>
            <Register
              signup={signup}
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
            signin={signin}
            loginFormData={constants.loginFormData}
            // handleSetIsLoggedIn={handleSetIsLoggedIn}
          />
        }
      />
    </Routes>
  );
}

export default App;
