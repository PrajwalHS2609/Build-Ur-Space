import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import pccConcretingApplication from "./../../../../Images/BlogImgs/PccConcreting/Applications of PCC Concreting.png";

const PccConcretingApplication = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={pccConcretingApplication}
        alt="Pcc Concreting Application"
      />{" "}
      <h5>Applications of PCC Concreting</h5>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Foundation Work
          </span>
          <p>
            PCC is widely used as a base layer for building foundations,
            ensuring stability and uniform load distribution.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={point} alt="point" /> Flooring
          </span>
          <p>
            Keeping a bowl of salt in a non-compliant area is believed to help
            absorb negative energies.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Pavements and Roads{" "}
          </span>
          <p>
            PCC is an excellent choice for constructing pavements, sidewalks,
            and even low-traffic roads due to its resilience and
            cost-efficiency.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Damp Proofing{" "}
          </span>
          <p>
            In areas prone to moisture, PCC acts as a barrier, protecting the
            structure from water damage.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Retaining Walls{" "}
          </span>
          <p>
            For landscaping and construction projects, PCC is used to build
            sturdy retaining walls that resist soil pressure.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PccConcretingApplication;
