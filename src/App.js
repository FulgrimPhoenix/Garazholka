import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import { NowView } from "./components/DataTime";
import { Header } from "./components/Header/Header";
import { constants } from "./utils/constants.js";
import { Main } from "./components/Main/Main.js";
import { Intro } from "./components/Intro/Intro.js";

function App() {
  return (
    <>
      <Header constants={constants} />
      <Main>
        <Intro >
          {/* <NowView interval={1000} /> */}
        </Intro>
      </Main>
    </>
  );
}

export default App;
