import React from "react";
import check from "./../../../Images/check.png";

const InteriorReadMoreWhyBuild = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        Why Choose <span>Build Ur Space</span> for Commercial & Home Interior
        Designing in Bangalore?
      </h2>
      <p>
        Choosing the right partner for your interior design project is essential
        for achieving the desired outcome. Here’s why{" "}
        <a href="https://buildurspace.com/">Build Ur Space</a> is the preferred choice for many when it
        comes to Commercial & Home Interior Designing in Bangalore:
      </p>
      <li>
        <span>
          <img src={check} alt="check" />
          Experienced Team:{" "}
        </span>
        <p>
          Our team of designers, architects, and project managers brings years
          of experience and expertise to every project.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Customer-Centric Approach:{" "}
        </span>
        <p>
          We put our clients at the heart of everything we do. From the initial
          consultation to the final handover, we ensure that your needs and
          preferences are always prioritized.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" /> Transparent Pricing:
        </span>
        <p>
          With Build Ur Space, there are no hidden costs. We provide a detailed
          breakdown of all expenses involved, ensuring complete transparency in
          our Commercial & Home Interior Designing in Bangalore services.
        </p>
      </li>

      <li>
        <span>
          <img src={check} alt="check" />
          Sustainability Commitment:{" "}
        </span>
        <p>
          We are committed to building a sustainable future. Our designs
          incorporate eco-friendly materials and practices that minimize
          environmental impact while maximizing efficiency.
        </p>
      </li>
    </div>
  );
};

export default InteriorReadMoreWhyBuild;
