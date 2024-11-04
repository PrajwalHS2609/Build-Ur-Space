import React from "react";
import "./HomeWhat.css";

const HomeWhatHead = (props) => {
  return (
    <div className="whatHeadContainer">
      <h2>
        WHAT WE DO -  <span>{props.head}</span>
      </h2>
    </div>
  );
};

export default HomeWhatHead;
