import React from "react";
import "./WaterProofingWhy.css";
import checked from "./../../../../../Images/check.png";

const WaterProofingWhy = () => {
  return (
    <div className="waterProofingWhy">
      <h5>Why is Waterproofing Essential for Your Home?</h5>
      <p>
        Before diving into the top waterproofing materials for home, let’s first
        understand why waterproofing is so crucial. Water infiltration can lead
        to severe damage over time, such as mold growth, structural
        deterioration, and foundation cracks. Not only does this affect the
        aesthetics of your home, but it can also cause health issues and require
        costly repairs.
      </p>
      <ul>
        <li>
          <span>
            <img src={checked} alt="checked" /> The foundation from cracks and
            shifts due to water infiltration.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> The basement or lower floors
            from water seepage.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={checked} alt="checked" /> Roofs and terraces from leakage
            during heavy rains.
          </span>
        </li>
        <li>
          <span>
            <img src={checked} alt="checked" /> Bathrooms, kitchens, and wet
            areas from moisture accumulation.
          </span>
        </li>
      </ul>
      <p>
        With these areas in mind, choosing the right top waterproofing materials
        for home protection can give you peace of mind and long-lasting
        durability.
      </p>
    </div>
  );
};

export default WaterProofingWhy;
