import React from "react";
import "./Project.css";
import projectHeaderBanner from "./../../Images/projectImgs/projectHeaderBanner.png";
const ProjectHeader = (props) => {
  return (
    <div className="projectHeader-container" id={props.id}>
      <img src={projectHeaderBanner} alt="" />
      <div className="projectHeader-cover">
        <h2>{props.heading}</h2>
        <p></p>
      </div>
    </div>
  );
};

export default ProjectHeader;
