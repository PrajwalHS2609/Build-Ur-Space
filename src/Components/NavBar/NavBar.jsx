import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import Menu from "./Menu";
import RespMenu from "./RespMenu";
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
      <div className="respNavbar">
        <div className="navBarContainer">
         <RespMenu/>
        </div>
      </div>
    </>
  );
};

export default NavBar;
