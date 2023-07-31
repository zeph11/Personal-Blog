// import { useState } from "react";
import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import RoutedPath from "./Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <RoutedPath />
      </BrowserRouter>
    </>
  );
}

export default App;
