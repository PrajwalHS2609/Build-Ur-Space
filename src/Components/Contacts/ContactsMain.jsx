import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
const ContactsMain = () => {
  return (
    <div className="contactMainContainer">
      <div className="contactMainContent1">
        <div className="contactMainItem1">
          <h1>
            HOW CAN WE <span>HELP</span>
          </h1>
          <br />
          <ul>
            <li>
              <p>Do You have any general question for construction?</p>
            </li>
            <li>
              <p>Do you have any upcoming project I’d like to discuss?</p>
            </li>
            <li>
              <p>
                Are you a Subcontractor and I’d love to partner with <span>Build Ur Space</span>?
              </p>
            </li>
            <li>
              <p>
                Are you enquiring about careers at <span>Build Ur Space</span>?
              </p>
            </li>
          </ul>
        </div>
        <div className="contactMainItem2">
          <h1>
            STAY <span>CONNECTED</span>
          </h1>
          <div className="contactType">
            <div className="contactMailing">
              <div className="contactMailIcon">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="contactIcon"
                ></FontAwesomeIcon>
              </div>
              <div className="contactMail">
                <h3>Mail us at</h3>
                <p>hello@buildurspace.com</p>
              </div>
            </div>
            <div className="contactPhone">
              <div className="contactPhoneIcon">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="contactIcon"
                ></FontAwesomeIcon>
              </div>
              <div className="contactPhoneNo">
                <h3>Call Us</h3>
                <p>+91 9742255110</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="contactMainContent2">
        <ContactForm />
      </div>
    </div>
  );
};


export default ContactsMain;
