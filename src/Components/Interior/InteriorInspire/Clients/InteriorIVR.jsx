import React from "react";
import "../InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import IVRPopUpSlide from "./IVRPopUpSlide";
const InteriorIVR = () => {
  let handleExit = () => {
    const popDown = document.querySelector("#ivrPopUp");
    popDown.style.display = "none";
  };
  return (
    <div className="inspirePopUp" id="ivrPopUp">
      <div className="inspirePopUpExit">
        <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
      </div>
      <IVRPopUpSlide />
    </div>
  );
};

export default InteriorIVR;
