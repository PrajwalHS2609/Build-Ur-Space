import React from "react";
import check from "./../../../../Images/check.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import duplexHouseChoosingBanner from "./../../../../Images/BlogImgs/Duplex House Construction/Choosing the Right Contractor for Duplex House Construction.png";

const DuplexHouseChoosing = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={duplexHouseChoosingBanner} alt="Duplex House choosing Img" />{" "}
      <h5>Choosing the Right Contractor for Duplex House Construction</h5>
      <p>
        Selecting the right contractor can make or break your project. Here are
        some tips:
      </p>
      <ul>
        <li>
          <span>
            <img src={check} alt="check" /> Check Credentials
          </span>
          <p>
            Look for licensed professionals with a proven track record in Duplex
            House Construction.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={check} alt="check" /> Review Past Projects
          </span>
          <p>
            Assess the contractor’s previous work to gauge their expertise and
            style.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={check} alt="check" />
            Seek Transparency{" "}
          </span>
          <p>
            Ensure the contractor provides a detailed contract outlining costs,
            timelines, and deliverables.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={check} alt="check" />
            Prioritize Communication{" "}
          </span>
          <p>
            Open and transparent communication ensures your vision is understood
            and implemented.
          </p>{" "}
        </li>
      </ul>
    </div>
  );
};

export default DuplexHouseChoosing;
