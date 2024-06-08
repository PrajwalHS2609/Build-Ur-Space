import React from "react";
import "./Package.css";
import { NavHashLink } from "react-router-hash-link";
import { smoothScroll } from './../SmoothScroll/smoothScroll';
const PackageMenuCard = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    const click = document.querySelector(".packageListContainer");
    click.style.display = "flex";

  };
  return (
    <div className="menuCardContainer" onClick={handleClick}>
      <NavHashLink to={props.link} scroll={smoothScroll}>
        <h2 className="head2">{props.head2}</h2>
        <h1 className="head1">{props.head1}</h1>
      </NavHashLink>
    </div>
  );
};

export default PackageMenuCard;
