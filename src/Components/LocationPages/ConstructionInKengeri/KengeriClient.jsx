import React from "react";
import point from "./../../../Images/point.png";

const KengeriClient = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>Our clients in Kengeri choose us for our dedication to:</h2>
      <li>
        <span>
          <img src={point} alt="point" />
          Personalized Attention:{" "}
        </span>
        <p>Every project is handled with care and personal attention.</p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Clear Communication:{" "}
        </span>
        <p>
          We keep communication lines open, making sure you are updated on all
          project details.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Reliable Partnerships:{" "}
        </span>
        <p>
          Build Ur Space works with trusted suppliers and contractors to deliver
          high-quality services.
        </p>
      </li>
    </div>
  );
};

export default KengeriClient;
