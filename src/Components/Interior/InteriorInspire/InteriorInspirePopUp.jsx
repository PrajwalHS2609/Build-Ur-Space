import React from "react";
import "./InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import InteriorPopUpSlide from "./InteriorPopUpSlide";
const InteriorInspirePopUp = () => {
  let handleExit = () => {
    const popDown = document.querySelector(".inspirePopUp");
    popDown.style.display = "none";
  };
  return (
    <div className="inspirePopUp">
      <div className="inspirePopUpExit">
        <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
      </div>
      <InteriorPopUpSlide />
    </div>
  );
};

export default InteriorInspirePopUp;
