import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import waterProofingPolyurethane from "./../../../../Images/WaterProofingBlog/Polyurethane Waterproofing.png";

const WaterProofingPolyurethane = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={waterProofingPolyurethane}
        alt="waterProofingPolyurethane"
      />
      <h5>4. Polyurethane Waterproofing</h5>
      <p>
        Polyurethane is a modern material that has gained popularity in recent
        years as one of the top waterproofing materials for home construction.
        This waterproofing method involves applying a polyurethane membrane that
        forms a seamless protective barrier. Its flexibility allows it to
        withstand movement and cracks in the underlying surface.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Excellent elasticity and flexibility.
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Highly resistant to extreme weather conditions.
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Seamless application reduces the
            risk of water seepage.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Best for roof waterproofing and
            foundation protection.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterProofingPolyurethane;
