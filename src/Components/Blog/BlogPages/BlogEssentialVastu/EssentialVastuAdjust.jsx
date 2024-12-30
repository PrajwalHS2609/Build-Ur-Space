import React from "react";
import point from "./../../../../Images/point.png";

const EssentialVastuAdjust = () => {
  return (
    <div className="waterProofingWhy">
      <h5>Making Adjustments for Non-Compliant Vastu Features</h5>
      <p>
        If certain aspects of your home are already constructed and don’t comply
        with Vastu principles, you can still make adjustments. For example:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Mirrors:
          </span>
          <p>
            Use mirrors to correct energy imbalances. Place them in the north or
            east direction to amplify positive energy.
          </p>
          </li>
          <li>
          <span>
            <img src={point} alt="point" /> Salt:
          </span>
          <p>
            Keeping a bowl of salt in a non-compliant area is believed to help
            absorb negative energies.
          </p>
          </li>
          <li>
          <span>
            <img src={point} alt="point" />
            Metallic Items:
          </span>
          <p>
            Wind chimes or bells in the north or northeast can help balance
            energy and remove obstacles.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EssentialVastuAdjust;
