import React from 'react'
import "../InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ClinicPopUpSlide from './ClinicPopUpSlide';
const InteriorClinic = () => {
    let handleExit = () => {
        const popDown = document.querySelector("#clinicPopUp");
        popDown.style.display = "none";
      };
  return (
    <div className="inspirePopUp" id="clinicPopUp">
      <div className="inspirePopUpExit">
        <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
      </div>
      <ClinicPopUpSlide />
    </div>
  )
}
export default InteriorClinic
