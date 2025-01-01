import React from "react";
import house from "./../../../Images/homeRed.png";

const KengeriService = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        Comprehensive <span>Services</span> for House Construction in Kengeri
      </h2>
      <p>
        At Build Ur Space, we believe that each home is unique, which is why we
        provide customized solutions for every project. As a trusted House
        Construction Company in Kengeri, our services cover every aspect of the
        building process, including:
      </p>

      <li>
        <span>
          <img src={house} alt="house" />
          Consultation and Planning:{" "}
        </span>
        <p>
          We start with a detailed consultation to understand your vision,
          budget, and requirements. Our expert team will help you plan the
          perfect layout and design that fits your lifestyle and preferences.
        </p>
      </li>

      <li>
        <span>
          <img src={house} alt="house" /> Architectural and Structural Design:
        </span>
        <p>
          Our in-house architects and engineers work with you to create
          functional, aesthetically pleasing designs that align with the latest
          architectural trends and meet all local building codes.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Project Management:{" "}
        </span>
        <p>
          From beginning to end, our dedicated project managers oversee all
          aspects of construction, ensuring that your project stays on schedule
          and within budget.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Quality Assurance:{" "}
        </span>
        <p>
          Quality is a cornerstone of our services. As a reliable House
          Construction Company in Kengeri, we only use high-quality materials
          and skilled labor to ensure long-lasting structures.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Post-Construction Support:{" "}
        </span>
        <p>
          Our commitment doesn’t end with construction. We provide
          post-construction support to address any maintenance needs, ensuring
          your new home remains in perfect condition.
        </p>
      </li>
    </div>
  );
};

export default KengeriService;
