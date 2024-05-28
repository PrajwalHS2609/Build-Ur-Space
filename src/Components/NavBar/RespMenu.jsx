import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import favicon from "./../../Images/favicon.png"
const RespMenu = () => {
  return (
    <div className="respNavBarItem">
       <li>
          <Link to={"/"}>
            <img src={favicon} alt="favicon" />
          </Link>
        </li>
      <li><Link>Construction</Link></li>
      <li><Link>Interior</Link></li>
      <li>
        <Link to={"/about-us"}>About Us</Link>
      </li>
      <li>
        <Link to={"/package"}>Package</Link>
      </li>
    </div>
  );
};

export default RespMenu;
