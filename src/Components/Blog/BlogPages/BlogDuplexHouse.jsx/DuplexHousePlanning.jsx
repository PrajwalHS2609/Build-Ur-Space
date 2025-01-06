import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import point from "./../../../../Images/point.png";
import duplexHousePlanningBanner from "./../../../../Images/BlogImgs/Duplex House Construction/Planning Your Duplex House Construction.png";

const DuplexHousePlanning = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={duplexHousePlanningBanner} alt="Duplex House planning Img" />{" "}
      <h5>Planning Your Duplex House Construction</h5>
      <p>
        Before diving into construction, meticulous planning is essential. Here
        are some critical steps to consider:
      </p>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Define Your Purpose
          </span>
          <p>
            Determine whether the duplex will be for personal use, rental
            purposes, or a mix of both. Your purpose will influence the design,
            layout, and amenities included.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={point} alt="point" /> Choose the Right Location
          </span>
          <p>
            The success of your Duplex House Construction heavily depends on the
            location. Look for areas with good connectivity, essential
            amenities, and a robust real estate market if you plan to rent out
            one unit.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Engage Professionals{" "}
          </span>
          <p>
            Work with experienced architects, engineers, and contractors who
            specialize in duplex construction. Their expertise ensures a
            seamless construction process and a home that meets your
            expectations.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Focus on Design and Layout{" "}
          </span>
          <p>
            Pay attention to the layout of both units. Ensure they are
            functional, spacious, and well-ventilated. Incorporate modern
            amenities and energy-efficient solutions for a comfortable living
            experience.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Obtain Necessary Approvals{" "}
          </span>
          <p>
            Ensure all legal formalities, such as land permits, zoning
            regulations, and building codes, are adhered to before starting
            construction.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Budget Wisely{" "}
          </span>
          <p>
            Set a realistic budget that includes construction costs, labor,
            materials, and contingencies. Keep some flexibility for unexpected
            expenses.
          </p>{" "}
        </li>
      </ul>
    </div>
  );
};

export default DuplexHousePlanning;
