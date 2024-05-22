import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import "./Global.css"
import NavBar from "./Components/NavBar/NavBar";
const App = () => {
  return (
    <div>
      <NavBar/>
      <HomePage />
    </div>
  );
};

export default App;
