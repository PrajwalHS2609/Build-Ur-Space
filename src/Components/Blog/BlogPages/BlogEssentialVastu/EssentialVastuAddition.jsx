import React from "react";
import point from "./../../../../Images/point.png";

const EssentialVastuAddition = () => {
  return (
    <div className="waterProofingWhy">
      <h5>Additional Vastu Tips for Your Dream Home</h5>
      <p>
        In addition to these Top 10 Vastu tips for home, here are a few more
        considerations that will bring positive energy to your dream home:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Indoor Plants:
          </span>
          <p>
            Plants like money plants and bamboo are known to bring prosperity.
            Avoid plants with thorns, as they may invite negativity.
          </p>
          <br />
          <span>
            <img src={point} alt="point" /> Water Elements:
          </span>
          <p>
            If you’re placing a fountain or water element, locate it in the
            northeast direction, which promotes peace and abundance.
          </p>
          <br />
          <span>
            <img src={point} alt="point" /> Artwork and Symbols:
          </span>
          <p>
            Positive imagery such as landscapes, family photos, or religious
            symbols can bring tranquility to the home.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EssentialVastuAddition;
