import React from "react";
import "./Contacts.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContactForm from "./ContactForm";
const ContactsMain = () => {
  return (
    <div className="contactMainContainer">
      <div className="contactMainContent1">
        <div className="contactMainItem2">
          <h2>
            STAY <span>CONNECTED</span>
          </h2>
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
                <p>
                  <a href="mailto:hello@buildurspace.com">
                    hello@buildurspace.com
                  </a>
                </p>
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
                <p>
                  <a href="tel:9742255110">+91 9742255110</a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="contactMainItem1">
          <p>
            <span> Build Ur Space:</span> #25, 1st floor, 4th cross, Trupthi
            complex, above Poorvika mobiles, Sanjay Nagar main road, Bengaluru -
            94
          </p>
        </div>
      </div>
      <div className="contactMainContent2">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactsMain;
