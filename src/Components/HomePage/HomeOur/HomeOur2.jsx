import React from "react";
import "./HomeOur2.css";
const HomeOur2 = (props) => {
  return (
    <div className="our2Container">
      <div className="our2Content2">
        <div className="our2Item2">
          <img src={props.img} alt="" />
        </div>
      </div>
      <div className="our2Content1">
        <div className="our2head">
          <h1>
            {props.h1} <span>{props.h2}</span>
          </h1>
        </div>
        <div className="our2Item1">
          <p>{props.txt}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeOur2;
