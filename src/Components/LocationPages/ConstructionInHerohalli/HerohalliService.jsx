import React from "react";
import house from "./../../../Images/homeRed.png";

const HerohalliService = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        Services Offered by <span>Build Ur Space</span> – Your House
        Construction Company in Herohalli{" "}
      </h2>
      <p>
        At Build Ur Space, we offer a wide range of services to meet the needs
        of our clients in Herohalli. As a comprehensive house construction
        company in Herohalli, our offerings are designed to make the
        construction process seamless, efficient, and customized to each
        client’s requirements.
      </p>

      <li>
        <span>
          <img src={house} alt="house" />
          Custom Home Design and Planning{" "}
        </span>
        <p>
          Our house construction company in Herohalli believes in the value of
          personalized service. We work with you to create a home design that
          reflects your lifestyle and preferences, ensuring every room serves a
          purpose and aligns with your vision.
        </p>
      </li>

      <li>
        <span>
          <img src={house} alt="house" /> Project Management
        </span>
        <p>
          Our experienced project managers handle every aspect of your project.
          As a reputable house construction company in Herohalli, we keep you
          informed at every stage, coordinate with vendors, and ensure timely
          completion without compromising quality.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Quality Materials and Sustainable Practices{" "}
        </span>
        <p>
          Build Ur Space is committed to using only high-quality, durable
          materials. We work with trusted suppliers and use sustainable
          practices whenever possible. Our house construction company in
          Herohalli takes quality seriously, guaranteeing that each aspect of
          your home is built to last.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Interior Design and Finishing{" "}
        </span>
        <p>
          The interior of your home is just as important as its exterior. As an
          experienced house construction company in Herohalli, we offer interior
          design services to bring beauty, comfort, and functionality to every
          space. From fixtures to color schemes, we help you achieve a cohesive,
          polished look.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Energy-Efficient and Eco-Friendly Solutions{" "}
        </span>
        <p>
          At Build Ur Space, we understand the importance of sustainability. We
          offer energy-efficient solutions, such as solar panel installations,
          insulated windows, and water-saving systems. These options not only
          reduce energy costs but also contribute to a healthier environment,
          which aligns with our role as a forward-thinking house construction
          company in Herohalli.
        </p>
      </li>
    </div>
  );
};

export default HerohalliService;
