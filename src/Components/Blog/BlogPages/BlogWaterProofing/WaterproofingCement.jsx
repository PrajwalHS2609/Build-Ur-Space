import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import waterproofingCement from "./../../../../Images/BlogImgs/WaterProofingBlog/Cementitious Waterproofing.png";

const WaterproofingCement = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={waterproofingCement} alt="waterProofing" />
      <h5>1. Cementitious Waterproofing</h5>
      <p>
        Cementitious waterproofing is one of the most commonly used top
        waterproofing materials for home construction. It is easy to apply and
        cost-effective, making it a popular choice for areas that are exposed to
        water, such as bathrooms, basements, and water tanks. This method
        involves mixing cement-based products with certain additives to create a
        waterproof barrier.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Easy to apply.
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Can be used in internal and external
            areas.
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" /> Durable when applied in multiple
            coats.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Ideal for water tanks, basements,
            bathrooms, and terraces.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterproofingCement;
