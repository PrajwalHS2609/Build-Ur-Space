import React from 'react'
import "../InteriorInspire.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import ShowroomPopUpSlide from './ShowroomPopUpSlide';
const InteriorShowroom = () => {
  
  let handleExit = () => {
    const popDown = document.querySelector("#showRoomPopUp");
    popDown.style.display = "none";
  };
  return (
    <div className="inspirePopUp" id="showRoomPopUp">
    <div className="inspirePopUpExit">
      <FontAwesomeIcon icon={faX} className="popXIcon" onClick={handleExit} />
    </div>
    <ShowroomPopUpSlide />
  </div>
  )
}

export default InteriorShowroom

