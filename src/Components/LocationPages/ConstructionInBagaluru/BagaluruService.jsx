import React from "react";
import house from "./../../../Images/homeRed.png";

const BagaluruService = () => {
  return (
    <div className="locationHeadContainer">
      <h2>
        <span>Services</span> Offered by Our House Construction Company in
        Bagaluru{" "}
      </h2>
      <li>
        <span>
          <img src={house} alt="house" />
           Architectural Design{" "}
        </span>
        <p>
          Your dream home begins with a great design. Our in-house architects
          work closely with you to create floor plans and layouts that maximize
          space and functionality while staying true to your vision.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Construction Services{" "}
        </span>
        <p>
          From laying the foundation to the final coat of paint, our team
          handles every aspect of construction with precision and care. Our
          House Construction Company in Bagaluru ensures that every project
          adheres to strict quality standards.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" /> Interior Design:
        </span>
        <p>
          A beautiful home deserves an equally stunning interior. Our interior
          design experts help you choose the perfect finishes, furnishings, and
          decor to create spaces that are both stylish and comfortable.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Renovation and Remodeling{" "}
        </span>
        <p>
          Thinking of upgrading your existing home? Our renovation services
          breathe new life into old spaces, enhancing both aesthetics and
          functionality.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Legal and Compliance Assistance{" "}
        </span>
        <p>
          Navigating the complexities of building permits and approvals can be
          overwhelming. Our team assists with all legal and compliance
          requirements, making the process smooth and hassle-free.
        </p>
      </li>
    </div>
  );
};

export default BagaluruService;
