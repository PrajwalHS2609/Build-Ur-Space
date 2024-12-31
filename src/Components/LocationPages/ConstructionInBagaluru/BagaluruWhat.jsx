import React from "react";
import point from "./../../../Images/point.png";

const BagaluruWhat = () => {
  return (
    <div className="locationHeadContainer">
      <h2>
        <span>What</span> Sets Us Apart?
      </h2>
      <li>
        <span>
          <img src={point} alt="point" />
          Local Expertise:{" "}
        </span>
        <p>
          As a trusted point Construction Company in Bagaluru, we have extensive
          knowledge of the local terrain, building regulations, and community
          preferences. This allows us to deliver homes that are well-suited to
          the area.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Quality Assurance{" "}
        </span>
        <p>
          We believe in doing things right the first time. From sourcing premium
          materials to employing skilled labor, we ensure that every aspect of
          your home is built to last.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" /> End-to-End Support:
        </span>
        <p>
          Our commitment doesn’t end when the construction is completed. We
          offer post-construction support to address any issues and ensure your
          home remains in perfect condition.
        </p>
      </li>
    </div>
  );
};

export default BagaluruWhat;
