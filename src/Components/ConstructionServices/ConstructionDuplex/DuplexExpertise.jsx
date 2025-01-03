import React from "react";
import house from "./../../../Images/homeRed.png";

const DuplexExpertise = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Our Expertise </span>in Duplex House Construction in Bangalore
      </h2>
      <p>
        At Build Ur Space, we bring years of experience and a deep understanding
        of duplex house construction in Bangalore to every project. Here’s how
        we make your dream home a reality:
      </p>

      <li>
        <span>
          <img src={house} alt="house" /> Custom Design:
        </span>
        <p>
          Our design team works closely with you to create a layout that suits
          your needs. Whether you have specific design preferences or require
          expert guidance, we ensure that every aspect of your duplex house
          construction in Bangalore is tailored to your lifestyle.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Quality Materials:{" "}
        </span>
        <p>
          The quality of materials used in construction plays a crucial role in
          the durability and aesthetics of your home. At Build Ur Space, we
          source only the best materials for duplex house construction in
          Bangalore, ensuring that your home is not only beautiful but also
          built to last.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Energy Efficiency:{" "}
        </span>
        <p>
          We incorporate energy-efficient designs and sustainable building
          practices into our duplex house construction in Bangalore projects.
          From insulation to natural lighting, we optimize every aspect of your
          home to reduce energy consumption and lower utility bills.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Transparent Process:{" "}
        </span>
        <p>
          We believe in keeping our clients informed at every stage of the
          project. Our transparent approach to duplex house construction in
          Bangalore includes regular updates, clear communication, and a
          detailed breakdown of costs, so there are no surprises.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Timely Delivery:{" "}
        </span>
        <p>
          We understand the importance of timely project completion. Our
          efficient project management ensures that your duplex house
          construction in Bangalore is completed on schedule without
          compromising on quality.
        </p>
      </li>
    </div>
  );
};

export default DuplexExpertise;
