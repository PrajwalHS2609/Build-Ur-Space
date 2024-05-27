import React from "react";
import "./NavBar.css";
import Logo from "./Logo";
import Menu from "./Menu";
import { Link } from "react-router-dom";
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
        <div className="respNavBarContent">
          <div className="respNavBarItem">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            {/* <li>Construction</li>
        <li>Interior</li>
        <li>How it Works</li> */}
            <li>
              <Link to={"/package"}>Package</Link>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
