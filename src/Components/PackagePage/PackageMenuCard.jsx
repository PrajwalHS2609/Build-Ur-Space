import React from "react";
import "./Package.css";
import { Link } from 'react-router-dom';

const PackageMenuCard = (props) => {
  return <div className="menuCardContainer" >
    <Link to={props.link}>
    <h2 className="head2">{props.head2}</h2>
    <h1 className="head1">{props.head1}</h1>
    </Link>
  </div>;
};

export default PackageMenuCard;
