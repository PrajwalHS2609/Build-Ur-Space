import React from "react";
import "../InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import BanqPopUpSlide from "./BanqPopUpSlide";
const InteriorBanq = () => {
  let handleExit = () => {
    const popDown = document.querySelector("#banqPopUp");
    popDown.style.display = "none";
  };
  return (
    <div className="inspirePopUp" id="banqPopUp">
      <div className="inspirePopUpExit">
        <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
      </div>
      <BanqPopUpSlide />
    </div>
  );
};

export default InteriorBanq;
