import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
const WaterProofingPvc = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/worker-performs-overhaul-roof-residential-building_181624-61003.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="waterProofing"
      />
      <h5>6. PVC Waterproofing Membrane</h5>
      <p>
        PVC (Polyvinyl Chloride) membranes are another modern solution for
        waterproofing. They are widely regarded as one of the top waterproofing
        materials for home construction, thanks to their durability and ease of
        installation. PVC membranes are commonly used in roofing systems and
        other areas that require waterproofing solutions.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Lightweight and easy to install.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Strong resistance to chemicals and UV exposure.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Provides excellent waterproofing
            protection.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Recommended for roofs, basements,
            and areas exposed to chemicals.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterProofingPvc;
