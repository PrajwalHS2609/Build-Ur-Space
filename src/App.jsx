import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import "./Global.css"
import "./Fonts/futura/FUTURA45LIGHT.TTF"
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <NavBar/>
      <HomePage />
      {/* <Footer/> */}
    </div>
  );
};

export default App;
