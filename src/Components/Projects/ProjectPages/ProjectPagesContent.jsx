import React from "react";
import "./ProjectPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faXTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faLinkedin,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
const ProjectPagesContent = (props) => {
  return (
    <div className="projectPagesContent-container">
      <div className="projectPagesContent-wrapper">
        <div className="projectPagesContent-item">
          <h4>CLIENT</h4>
        </div>
        <div className="projectPagesContent-item">
          <b>{props.client}</b>
        </div>
      </div>
      <div className="projectPagesContent-wrapper">
        <div className="projectPagesContent-item">
          <h4>COMPLETION DATE</h4>
        </div>
        <div className="projectPagesContent-item">
          <b>{props.date}</b>
        </div>
      </div>
      <div className="projectPagesContent-wrapper">
        <div className="projectPagesContent-item">
          <h4>DELIVERY METHOD</h4>
        </div>
        <div className="projectPagesContent-item">
          <b>{props.method}</b>
        </div>
      </div>
      <div className="projectPagesContent-wrapper">
        <div className="projectPagesContent-item">
          <h4>TEAM LEADER</h4>
        </div>
        <div className="projectPagesContent-item">
          <b>{props.leader}</b>
        </div>
      </div>
      <div className="projectPagesContent-wrapper">
        <div className="projectPagesContent-item">
          <h4>LOCATION</h4>
        </div>
        <div className="projectPagesContent-item">
          <b>
            {props.location}
          </b>
        </div>
      </div>
      <div className="projectPagesContent-wrapper">
        <div className="projectPagesContent-item">
          <h4>SOCIAL SHARE</h4>
        </div>
        <div className="projectPagesContent-item" id="projectPagesContent-socialItem">
          <div className="projectPagesContent-socialIcon" >
            {" "}
            <a href="">
              <FontAwesomeIcon
                icon={faXTwitter}
                className="projectPages-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="projectPagesContent-socialIcon">
            <a href="">
              {" "}
              <FontAwesomeIcon
                icon={faInstagram}
                className="projectPages-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="projectPagesContent-socialIcon">
            <a href="">
              {" "}
              <FontAwesomeIcon
                icon={faFacebook}
                className="projectPages-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="projectPagesContent-socialIcon">
            {" "}
            <a href="">
              {" "}
              <FontAwesomeIcon
                icon={faYoutube}
                className="projectPages-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="projectPagesContent-socialIcon">
            {" "}
            <a href="">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="projectPages-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
          <div className="projectPagesContent-socialIcon">
            <a href="">
              <FontAwesomeIcon
                icon={faPinterest}
                className="projectPages-socialIcon"
              ></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPagesContent;
