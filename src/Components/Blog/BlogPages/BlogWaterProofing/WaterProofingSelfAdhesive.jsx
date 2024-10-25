import React from "react";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import point from "./../../../../Images/point.png";

const WaterProofingSelfAdhesive = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/worker-performs-overhaul-roof-residential-building_181624-61003.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="waterProofing"
      />
      <h5>8. Self-Adhesive Waterproofing Membranes</h5>
      <p>
        Self-adhesive membranes are easy to install and are highly effective for
        various surfaces. These membranes are pre-manufactured with adhesive
        backing, making them an efficient top waterproofing material for home
        projects, especially where speed and ease of application are critical.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Quick and easy to apply.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> No need for additional adhesives or
            sealants.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Offers excellent protection against
            water and dampness.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Ideal for basements, foundations, and roofs.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterProofingSelfAdhesive;
