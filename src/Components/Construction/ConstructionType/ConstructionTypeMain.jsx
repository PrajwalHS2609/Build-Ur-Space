import React from "react";
import "../Construction.css";
import ConstructionTypes from "./ConstructionTypes";
import ConstructionTypeHead from "./ConstructionTypeHead";

const ConstructionTypeMain = () => {
  return (
    <div className="constructionTypeMain">
      <ConstructionTypeHead />
      <ConstructionTypes />
    </div>
  );
};

export default ConstructionTypeMain;
