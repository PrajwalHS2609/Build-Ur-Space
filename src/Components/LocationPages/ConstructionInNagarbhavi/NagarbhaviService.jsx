import React from "react";
import house from "./../../../Images/homeRed.png";

const NagarbhaviService = () => {
  return (
    <div className="locationHeadContainer">
      <h2>
        Our House Construction <span>Services</span> in Nagarbhavi
      </h2>
      <li>
        <span>
          <img src={house} alt="house" />
          Residential Construction{" "}
        </span>
        <p>
          <ul>
            <li>• Independent houses</li>
            <li>• Duplex homes</li>
            <li>• Villas</li>
            <li>• Row houses</li>
          </ul>
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Turnkey Construction Solutions{" "}
        </span>
        <p>
          From designing to final handover, we take care of every aspect of the
          construction process, ensuring a stress-free experience for
          homeowners.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" /> Architectural Design and Planning
        </span>
        <p>
          Our team provides innovative and modern architectural designs tailored
          to your space, lifestyle, and preferences.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Structural Engineering and Consultation{" "}
        </span>
        <p>
          We ensure that your home is structurally sound by providing expert
          engineering solutions, including soil testing and foundation analysis.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Interior Designing and Landscaping{" "}
        </span>
        <p>
          Once the construction is completed, we also offer interior design and
          landscaping services to enhance the beauty and functionality of your
          home.
        </p>
      </li>
    </div>
  );
};

export default NagarbhaviService;
