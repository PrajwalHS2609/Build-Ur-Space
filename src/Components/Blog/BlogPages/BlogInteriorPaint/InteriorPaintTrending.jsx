import React from "react";
import point from "./../../../../Images/point.png";

const InteriorPaintTrending = () => {
  return (
    <div className="waterProofingWhy">
      <h5>Trending Paint Finishes to Consider</h5>
      <p>
        The finish of your paint can also influence the overall look. Popular
        finishes include:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> A deep navy accent wall in a white
            living room creates a striking effect.
          </span>
          <span>
            <img src={point} alt="point" /> Mustard yellow in a neutral-toned
            kitchen adds a pop of energy.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InteriorPaintTrending;
