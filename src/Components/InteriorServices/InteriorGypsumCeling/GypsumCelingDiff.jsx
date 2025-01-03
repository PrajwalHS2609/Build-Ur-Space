import React from "react";
import point from "./../../../Images/point.png";

const GypsumCelingDiff = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        The <span>Build Ur Space</span> Difference{" "}
      </h2>
      <li>
        <span>
          <img src={point} alt="point" />
          Expertise and Experience{" "}
        </span>
        <p>
          With years of experience in the construction and interior design
          industry, we have honed our skills in delivering exceptional gypsum
          ceiling solutions in Bangalore. Our team is well-versed in the latest
          trends and techniques, ensuring that your project is handled with
          expertise.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Customer-Centric Approach{" "}
        </span>
        <p>
          At Build Ur Space, customer satisfaction is our top priority. We
          believe in building strong relationships with our clients by
          understanding their needs and delivering results that exceed
          expectations. From the initial consultation to project completion, we
          are with you every step of the way.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Quality Materials{" "}
        </span>
        <p>
          We source our gypsum boards and materials from trusted manufacturers
          to ensure that your ceiling is durable and of the highest quality. Our
          commitment to quality means that you can trust us to deliver a product
          that will stand the test of time.
        </p>
      </li>
    </div>
  );
};

export default GypsumCelingDiff;
