import React from "react";
import "./HomeOur1.css";
const HomeOur1 = (props) => {
  return (
    <div className="our1Container">
      <div className="our1head">
        <h2>
          {props.h1} <span>{props.h2}</span>
        </h2>
      </div>
      <div className="our1Wrapper">
        <div className="our1Content1">
          <div className="our1Item1">
            <p>{props.txt}</p>
          </div>
        </div>
        <div className="our1Content2">
          <div className="our1Item2">
            <img src={props.img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeOur1;
