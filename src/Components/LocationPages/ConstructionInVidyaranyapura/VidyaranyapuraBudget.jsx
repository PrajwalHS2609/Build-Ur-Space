import React from "react";
import house from "./../../../Images/homeRed.png";

const VidyaranyapuraBudget = () => {
  return (
    <div className="locationHeadContainer">
      <h2>
        Building Homes for Every <span>Budget</span>{" "}
      </h2>
      <p>
        Our House Construction Company in Vidyaranyapura caters to a wide range
        of budgets without compromising on quality. Whether you’re building a
        modest home or a luxurious residence, we ensure you get the best value
        for your investment. We offer:
      </p>
      <li>
        <span>
          <img src={house} alt="house" />
          Affordable Housing:{" "}
        </span>
        <p>
          Practical designs and cost-effective solutions for first-time
          homeowners.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Mid-Range Homes:{" "}
        </span>
        <p>
          Balanced designs that offer the perfect blend of style and
          functionality.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Luxury Villas:{" "}
        </span>
        <p>
          Bespoke designs with premium finishes for those who desire the finest
          living experience.
        </p>
      </li>
    </div>
  );
};

export default VidyaranyapuraBudget;
