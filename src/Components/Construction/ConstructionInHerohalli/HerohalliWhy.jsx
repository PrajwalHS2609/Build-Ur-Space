import React from "react";
import check from "./../../../Images/check.png";

const HerohalliWhy = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        Why Homeowners Trust <span>Build Ur Space</span> – House Construction
        Company in Herohalli
      </h2>
      <p>
        Building a home is a significant investment, and finding a reliable
        partner can make all the difference. Clients choose Build Ur Space as
        their house construction company in Herohalli for our:
      </p>
      <li>
        <span>
          <img src={check} alt="check" />
          Client-Centered Approach:{" "}
        </span>
        <p>
          We work closely with clients to understand their vision, creating
          homes that reflect their preferences and needs.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Reliable Network:{" "}
        </span>
        <p>
          We collaborate with top suppliers and contractors to ensure that every
          material and service meets our high standards.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Attention to Detail:{" "}
        </span>
        <p>
          Every inch of your home matters to us, from foundation to finishing
          touches. Our meticulous attention to detail is what sets us apart as a
          house construction company in Herohalli.
        </p>
      </li>
    </div>
  );
};

export default HerohalliWhy;
