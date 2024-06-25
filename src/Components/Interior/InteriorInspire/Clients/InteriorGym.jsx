import React from "react";
import "../InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import GymPopUpSlide from "./GymPopUpSlide";
const InteriorGym = () => {
  let handleExit = () => {
    const popDown = document.querySelector("#gymPopUp");
    popDown.style.display = "none";
  };
  return (
    <div className="inspirePopUp" id="gymPopUp">
      <div className="inspirePopUpExit">
        <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
      </div>
      <GymPopUpSlide />
    </div>
  );
};

export default InteriorGym;
