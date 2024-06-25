import React from "react";
import RajaPopUpSlide from "./RajaPopUpSlide";
import "../InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
const InteriorRajaShekar = () => {
  let handleExit = () => {
    const popDown = document.querySelector("#rajaPopUp");
    popDown.style.display = "none";
  };
  return (
    <div className="inspirePopUp" id="rajaPopUp">
      <div className="inspirePopUpExit">
        <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
      </div>
      <RajaPopUpSlide />
    </div>
  );
};

export default InteriorRajaShekar;
