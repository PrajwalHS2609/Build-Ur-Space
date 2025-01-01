import React from "react";
import house from "./../../../Images/homeRed.png";

const DevanahalliService = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span> Full-Service</span> House Construction Company in Banaswadi{" "}
      </h2>
      <p>
        As a full-service{" "}
        <a href="https://buildurspace.com/construction-service-in-bangalore">
          house construction company in Devanahalli
        </a>
        , Build Ur Space offers a wide array of construction services, from
        architectural design to interior finishing. Our services include:
      </p>

      <li>
        <span>
          <img src={house} alt="house" />
          Site Evaluation and Planning:{" "}
        </span>
        <p>
          We help you assess the land and determine the best layout for your
          home based on the topography, orientation, and zoning regulations of
          Devanahalli.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Architectural Design:{" "}
        </span>
        <p>
          Our experienced architects collaborate with you to create a functional
          and aesthetically pleasing design that suits your lifestyle and needs.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Structural Engineering:{" "}
        </span>
        <p>
          We ensure that your home is built to withstand environmental factors,
          using cutting-edge engineering techniques to guarantee safety and
          durability.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Interior Design:{" "}
        </span>
        <p>
          In addition to building the structure, Build Ur Space offers interior
          design services to create beautiful, comfortable living spaces that
          complement your home’s architecture.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Project Management:{" "}
        </span>
        <p>
          As a reliable house construction company in Devanahalli, we oversee
          every aspect of the construction process, coordinating with
          contractors, vendors, and other stakeholders to ensure timely and
          efficient completion.
        </p>
      </li>
    </div>
  );
};

export default DevanahalliService;
