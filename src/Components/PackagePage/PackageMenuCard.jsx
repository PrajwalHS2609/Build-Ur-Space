import React from "react";
import "./Package.css";
import { NavHashLink } from "react-router-hash-link";
const PackageMenuCard = (props) => {
  return (
    <div className="menuCardContainer">
      <NavHashLink to={props.link}>
        <h2 className="head2">{props.head2}</h2>
        <h1 className="head1">{props.head1}</h1>
      </NavHashLink>
    </div>
  );
};

export default PackageMenuCard;
