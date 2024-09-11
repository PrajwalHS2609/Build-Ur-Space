import React from "react";
import "./HomeReadMoreHead/HomeReadMoreHead.css";
import HomeReadMoreDrop from "./HomeReadMoreDrop/HomeReadMoreDrop";
import HomeReadMoreHead from "./HomeReadMoreHead/HomeReadMoreHead";
const HomeReadMore = () => {
  return (
    <div className="homeReadMoreWrapper">
      <HomeReadMoreHead />
      <HomeReadMoreDrop />
    </div>
  );
};

export default HomeReadMore;
