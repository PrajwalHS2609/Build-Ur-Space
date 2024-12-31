import React from "react";
import point from "./../../../Images/point.png";

const VidyaranyapuraService = () => {
  return (
    <div className="locationHeadContainer">
      <h2>
        <span>Services</span> Offered by Our House Construction Company in
        Vidyaranyapura{" "}
      </h2>
      <li>
        <span>
          <img src={point} alt="point" />
          Local Expertise:{" "}
        </span>
        <p>
          Your dream home begins with a great design. Our in-house architects
          work closely with you to create floor plans and layouts that maximize
          space and functionality while staying true to your vision.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Construction Services{" "}
        </span>
        <p>
          From laying the foundation to the final coat of paint, our team
          handles every aspect of construction with precision and care. Our
          House Construction Company in Vidyaranyapura ensures that every
          project adheres to strict quality standards.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" /> Interior Design:
        </span>
        <p>
          A beautiful home deserves an equally stunning interior. Our interior
          design experts help you choose the perfect finishes, furnishings, and
          decor to create spaces that are both stylish and comfortable.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
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
          <img src={point} alt="point" />
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

export default VidyaranyapuraService;
