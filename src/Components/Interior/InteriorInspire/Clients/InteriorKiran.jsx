import React from "react";
import "../InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import KiranPopUpSlide from "./KiranPopUpSlide";
const InteriorKiran = () => {
  let handleExit = () => {
    const popDown = document.querySelector("#kiranPopUp");
    popDown.style.display = "none";
  };
  return (
    <div className="inspirePopUp" id="kiranPopUp">
      <div className="inspirePopUpExit">
        <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
      </div>
      <KiranPopUpSlide />
    </div>
  );
};

export default InteriorKiran;
