import React from "react";
import "./WhereToFind.css";
import WhereToFindCard from "./WhereToFindCard";
const WhereToFind = () => {
  return (
    <div className="whereContainer">
      <div className="whereHead">
        <h1>
          WHERE TO <span>FIND US</span>
        </h1>
      </div>
      <div className="whereMapContainer">
        <WhereToFindCard />
      </div>
    </div>
  );
};

export default WhereToFind;
