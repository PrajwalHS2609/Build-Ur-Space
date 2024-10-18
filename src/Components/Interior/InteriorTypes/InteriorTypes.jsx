import React from "react";
import "./InteriorTypes.css";
import InteriorTypesHead from "./InteriorTypesHead";
import InteriorTypesPara from "./InteriorTypesPara";
import InteriorTypesMain from "./InteriorTypesMain";

const InteriorTypes = () => {
  return (
    <div className="interiorTypeContainer">
      <InteriorTypesHead />
      <InteriorTypesPara />
      <InteriorTypesMain />
      
    </div>
  );
};

export default InteriorTypes;
