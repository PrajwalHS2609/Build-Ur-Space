import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faClock,
  faBoltLightning,
  faCube,
} from "@fortawesome/free-solid-svg-icons";
const ProjectManagement = () => {
  return (
    <div className="projectManagement-container">
      <div className="projectManagement-content">
        <div className="projectManagement-item">
          <FontAwesomeIcon
            icon={faIndianRupeeSign}
            className="projectManagement-Icon"
          ></FontAwesomeIcon>
          <h3>1 Cr</h3>
          <p>PROJECT VALUE</p>
        </div>
        <div className="projectManagement-item">
          <FontAwesomeIcon
            icon={faClock}
            className="projectManagement-Icon"
          ></FontAwesomeIcon>
          <h3>12</h3>
          <p>MONTHS TO BUILD</p>
        </div>
        <div className="projectManagement-item">
          <FontAwesomeIcon
            icon={faBoltLightning}
            className="projectManagement-Icon"
          ></FontAwesomeIcon>
          <h3>2.2kW</h3>
          <p>EMR SAFETY RATE</p>
        </div>
        <div className="projectManagement-item">
          <FontAwesomeIcon
            icon={faCube}
            className="projectManagement-Icon"
          ></FontAwesomeIcon>
          <h3>1650</h3>
          <p>SQ FT</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectManagement;
