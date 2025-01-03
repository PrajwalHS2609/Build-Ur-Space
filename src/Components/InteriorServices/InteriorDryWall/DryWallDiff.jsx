import React from "react";
import point from "./../../../Images/point.png";

const DryWallDiff = () => {
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
          industry, Build Ur Space is your go-to provider for{" "}
          <a href="https://buildurspace.com/">dry wall partitions in Bangalore</a>. Our knowledgeable
          team stays current on the latest industry trends, ensuring your
          project is executed with the utmost professionalism and expertise.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Customer-Centric Approach{" "}
        </span>
        <p>
          At Build Ur Space, our clients are our priority. We believe in
          building strong relationships by understanding your needs and
          delivering results that exceed your expectations. From your initial
          consultation to the final installation, we are here to support you
          every step of the way.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Quality Materials{" "}
        </span>
        <p>
          We source our materials from reputable manufacturers to ensure the
          durability and quality of your dry wall partition in Bangalore. Our
          commitment to using high-quality materials means that your partitions
          will not only look great but also stand the test of time.
        </p>
      </li>
    </div>
  );
};

export default DryWallDiff;
