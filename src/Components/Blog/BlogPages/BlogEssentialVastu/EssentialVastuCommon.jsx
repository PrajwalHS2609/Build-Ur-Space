import React from "react";
import point from "./../../../../Images/point.png";

const EssentialVastuCommon = () => {
  return (
    <div className="waterProofingWhy">
      <h5>Common Vastu Mistakes to Avoid</h5>
      <p>
        While creating a Vastu-compliant home, it’s easy to overlook a few
        things. Here are some common mistakes to be mindful of:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Clutter at the Entrance:
          </span>
          <p>
            Ensure that the entrance is free from clutter, as it can block the
            flow of positive energy.
          </p>
          <br />
          <span>
            <img src={point} alt="point" /> Water Bodies in the Wrong Direction:
          </span>
          <p>
            Placing a water fountain in the wrong direction, such as the
            southwest, can cause imbalance and negative effects.
          </p>
          <br />
          <span>
            <img src={point} alt="point" /> Improper Use of Colors:
          </span>
          <p>
            Using very dark or intense colors can disrupt the harmony of a
            space. Stick to lighter shades, particularly in the living and
            dining areas.
          </p>
          <br />
          <span>
            <img src={point} alt="point" /> Ignoring the Central Area
            (Brahmasthan):
          </span>
          <p>
            In Vastu, the center of the home should remain open and clear,
            allowing energy to flow freely throughout the house.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default EssentialVastuCommon;
