import React from "react";
import house from "./../../../Images/homeRed.png";

const ResidentialExpertise = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Our Expertise</span> in Residential House Construction in
        Bangalore{" "}
      </h2>
      <p>
        At <a href="https://buildurspace.com/"> Build Ur Space</a>, we have a
        proven track record of delivering successful{" "}
        <a href="https://buildurspace.com/residential-house-construction-in-bangalore">
          Residential House Construction in Bangalore
        </a>
        projects. Our portfolio includes a wide range of homes, from compact
        urban residences to sprawling suburban estates. Here are some of the key
        areas where we excel:
      </p>
      <li>
        <span>
          <img src={house} alt="house" loading="lazy" /> Modern Homes:
        </span>
        <p>
          If you’re looking for a sleek, contemporary design, our team is
          well-versed in modern architecture and design principles. We
          incorporate the latest trends and technologies in Residential House
          Construction in Bangalore to create homes that are both stylish and
          functional.
        </p>
      </li>

      <li>
        <span>
          <img src={house} alt="house" /> Traditional Homes:
        </span>
        <p>
          For those who prefer a more classic aesthetic, our team can create
          timeless designs that exude elegance and charm. Our expertise in
          Residential House Construction in Bangalore ensures that traditional
          homes are built with the highest level of craftsmanship and attention
          to detail.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Sustainable Homes:{" "}
        </span>
        <p>
          Sustainability is becoming increasingly important in Residential House
          Construction in Bangalore. We offer eco-friendly construction options,
          including energy-efficient designs, sustainable materials, and green
          building practices, to help you reduce your environmental impact while
          enjoying a comfortable and modern home.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Luxury Homes:{" "}
        </span>
        <p>
          Our experience in{" "}
          <a href="https://buildurspace.com/residential-house-construction-in-bangalore">
            Residential House Construction in Bangalore
          </a>{" "}
          extends to high-end luxury residences. We specialize in creating
          opulent, custom-built homes that offer the ultimate in comfort, style,
          and sophistication.
        </p>
      </li>
    </div>
  );
};

export default ResidentialExpertise;
