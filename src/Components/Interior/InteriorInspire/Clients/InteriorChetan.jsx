import React from "react";
import "../InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ChetanPopUpSlide from "./ChetanPopUpSlide";
const InteriorChetan = () => {
  let handleExit = () => {
    const popDown = document.querySelector("#chetanPopUp");
    popDown.style.display = "none";
  };
  return (
    <div className="inspirePopUp" id="chetanPopUp">
      <div className="inspirePopUpExit">
        <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
      </div>
      <ChetanPopUpSlide />
    </div>
  );
};

export default InteriorChetan;
