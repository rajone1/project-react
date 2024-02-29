import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import count from "./count";
import Count1 from "./count";
import User from "./user";
import Friends from "./friends";
import Postname from "./postitem";

function App() {
  function Addclick() {
    alert("first");
  }

  function Addclick2() {
    alert("click 2");
  }

  return (
    <>
      <h1>Vite + React</h1>
      <Postname></Postname>

      {/* <Friends></Friends> */}
      <User></User>

      <Count1></Count1>
      <button onClick={Addclick}> click-1</button>
      <button onClick={Addclick2}> click-2</button>
      <button
        onClick={() => {
          alert("hello3");
        }}
      >
        click-3
      </button>
    </>
  );
}

export default App;
