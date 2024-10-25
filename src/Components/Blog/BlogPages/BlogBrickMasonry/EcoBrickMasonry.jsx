import React from "react";
import point from "./../../../../Images/point.png";
import check from "./../../../../Images/check.png";
import house from "./../../../../Images/homeRed.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const EcoBrickMasonry = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img="https://img.freepik.com/free-photo/brick-piles-placed-factory-floor_1150-15102.jpg?uid=R153459844&ga=GA1.1.798303094.1721912336&semt=ais_hybrid"
        alt="Eco-friendly"

      />
      <h5>7. Eco-friendly or Fly Ash Brick Masonry</h5>
      <p>
        With the growing demand for sustainable building practices, eco-friendly
        brick masonry for home construction has gained popularity. Fly ash
        bricks, made from industrial waste like fly ash, lime, and gypsum, are
        an environmentally friendly alternative to traditional clay bricks.
        These bricks are lighter, more durable, and have excellent thermal
        properties.
      </p>
      <ul>
        <h4>Features:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Made from industrial byproducts like
            fly ash
          </span>
          <span>
            <img src={point} alt="point" /> Lightweight and durable
          </span>
          <span>
            <img src={point} alt="point" /> Energy-efficient and eco-friendl
          </span>
        </li>
      </ul>
      <ul>
        <h4>Benefits:</h4>
        <li>
          <span>
            <img src={check} alt="check" /> Reduces carbon footprint and
            utilizes waste materials{" "}
          </span>
          <span>
            <img src={check} alt="check" /> Provides excellent insulation,
            reducing energy consumption in homes
          </span>
          <span>
            <img src={check} alt="check" /> Lighter than traditional bricks,
            reducing the overall weight of the structure
          </span>
        </li>
      </ul>
      <ul>
        <h4>Applications:</h4>
        <li>
          <span>
            <img src={house} alt="house" /> Sustainable homes and buildings that
            prioritize eco-friendly materials
          </span>
          <span>
            <img src={house} alt="house" /> Ideal for regions where
            environmental regulations promote the use of green building
            materials
          </span>
        </li>
      </ul>
      <br />
    </div>
  );
};

export default EcoBrickMasonry;
