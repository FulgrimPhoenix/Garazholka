import "./App.css";
// import "../../vendor/fonts/fonts.css";
// import "../../vendor/normalize.css";
import React, { SyntheticEvent, useEffect, useState } from "react";
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
import { Profile } from "../Profile/Profile.tsx";
import { Popup } from "../Popup/Popup.js";
import { EventList } from "../EventList/EventList";
import { SearchString } from "../SearchString/SearchString";
import YandexMapApi from "../../utils/YandexMapApi.js";
import { api, IUserAuth } from "../../utils/MainApi";
import CustomCalendar from "../CustomCalendar/CustomCalendar";

import { useUrlPathName } from "../../hooks/useUrlPathName";
import { TEventList, TEventStatesList } from "../../types";
import { GroupProfile } from "../GroupProfile/GroupProfile.tsx";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [currentHeaderTitle, setCurrentHeaderTitle] = useState("Профиль");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupOption, setPopupOption] = useState({
    title: "Что хочешь?",
    description: "Выберите интересующие вас мероприятия",
  });
  const [currentPopupMarkupTitle, setCurrentPopupMarkupTitle] =
    useState<string>("");
  const [eventList, setEventList] = useState(constants.eventListData.eventList);
  const [filteredEventList, setFilteredEventList] =
    useState<TEventList>(eventList);
  const [eventStatesList, setEventsStatesList] = useState<TEventStatesList>(
    constants.eventListData.eventList.reduce<TEventStatesList>((acc, el) => {
      acc = [...acc, { id: el.id, selected: false }];
      return acc;
    }, [])
  );
  const [abbreviatedEventStatesList, setAbbreviatedEventStatesList] = useState(
    constants.eventListData.eventList.filter((el, i) => i < 5)
  );
  const currentPath = useUrlPathName();

  function signup({ email, login, password }: IUserAuth) {
    api.signup({ email, login, password }).then((res) => {
      console.log(res);
    });
  }

  function signin({ email, password }: IUserAuth) {
    api.signin({ email, password }).then((res) => {
      console.log(res);
    });
  }

  function handlePopup(state: boolean): void {
    setIsPopupOpen(state);
  }

  function changePopupMarkup(calledMarkup: string): React.ReactElement {
    if (calledMarkup === "/eventList") {
      return (
        <SearchString
          searchParameter={"title"}
          itemList={eventList}
          setEventList={setFilteredEventList}
        >
          <EventList
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
          <CustomCalendar locale="ru" selectedDate={new Date()} />
        </>
      );
    } else {
      return <></>;
    }
  }

  function openPopupWithMoreEvents(e: React.SyntheticEvent<EventTarget>) {
    e.preventDefault();
    setCurrentPopupMarkupTitle("/eventList");
    handlePopup(true);
  }

  useEffect(() => {
    if (currentPopupMarkupTitle === "/eventList") {
      setPopupOption({
        title: "Список мерпориятий в текущей группе",
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
  }, [currentPopupMarkupTitle]);

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
                {changePopupMarkup(currentPopupMarkupTitle)}
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
                groupListData={constants.profile.groupListData}
                calendarBlockData={constants.calendarBlockData}
                eventList={abbreviatedEventStatesList}
                mapBlockData={constants.mapBlockData}
                wayTimePreferenceBlockData={
                  constants.wayTimePreferenceBlockData
                }
                handlePopup={handlePopup}
                eventStatesList={eventStatesList}
                setEventsStatesList={setEventsStatesList}
                setCurrentPopupMarkupTitle={setCurrentPopupMarkupTitle}
                openPopupWithMoreEvents={openPopupWithMoreEvents}
                currentPath={currentPath}
                isPopupOpen={isPopupOpen} //возможно лишнее свойство
              />
            }
          />
        </Route>
        <Route
          path="/group-profile"
          element={
            <GroupProfile
              groupTitle={constants.groupProfile.groupTitle}
              id={constants.groupProfile.id}
              followersNumber={constants.groupProfile.followersNumber}
              events={constants.groupProfile.events}
              followers={constants.groupProfile.followers}
              description={constants.groupProfile.description}
              avatar={constants.groupProfile.avatar}
              eventList={abbreviatedEventStatesList}
              eventStatesList={eventStatesList}
              setEventsStatesList={setEventsStatesList}
              openPopupWithMoreEvents={openPopupWithMoreEvents}
              isPopupOpen={isPopupOpen} //возможно лишнее свойство
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
