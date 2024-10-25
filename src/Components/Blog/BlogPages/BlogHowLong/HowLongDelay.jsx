import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";

const HowLongDelay = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img="https://images.unsplash.com/photo-1542621334-a254cf47733d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ymx1ZXByaW50fGVufDB8fDB8fHww"
        alt="HowLongDelay"
      />
      <h5>4. Potential Delays in Building a 30x40 Feet House in Bangalore</h5>
      <p>
        While it’s possible to complete the construction of a 30x40 Feet House
        in Bangalore within the estimated timeline, several factors could lead
        to delays:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Weather:
          </span>
          <p>
            As mentioned, Bangalore experiences heavy rains during the monsoon
            season, which can delay outdoor construction activities.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Labor Shortages:
          </span>
          <p>
            The availability of skilled labor can also impact the timeline. In
            some cases, strikes or holidays can delay the project.
          </p>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Material Shortages:
          </span>
          <p>
            In times of high demand, materials like cement, steel, or tiles may
            become scarce, leading to delays in construction.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Changes in Design:
          </span>
          <p>
            {" "}
            If you decide to make significant changes to the design midway
            through construction, it could cause delays in both the approvals
            and execution stages.
          </p>
        </li>
        <li>
          <span>
            <img src={point} alt="point" />
            Legal and Regulatory Issues:{" "}
          </span>
          <p>
            Delays in obtaining permits or addressing legal issues related to
            land ownership or zoning can also hold up the construction process.{" "}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default HowLongDelay;
