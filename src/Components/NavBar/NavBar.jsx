import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import Menu from "./Menu";
const NavBar = () => {
  return (
    <>
      <div className="navBarContainer">
        <div className="navBarContent1">
          <Logo />
        </div>
        <div className="navBarContent2">
          <Menu />
        </div>
      </div>
     
    </>
  );
};

export default NavBar;
