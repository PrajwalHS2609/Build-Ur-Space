import React from "react";
import check from "./../../../../Images/check.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import kitchenHallDesignIntegrate from "./../../../../Images/BlogImgs/Modern Kitchen and Hall Design/Integrating Kitchen and Hall Spaces.png";

const KitchenHallDesignIntegrate = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={kitchenHallDesignIntegrate}
        alt="kitchen Hall Design Integrate"
      />
      <h5>Integrating Kitchen and Hall Spaces</h5>
      <p>
        A growing trend in home design is to merge the kitchen and hall into a
        unified space. This approach not only optimizes space but also fosters
        interaction and connectivity among family members and guests.
      </p>
      <ul>
        <h4>Benefits of Unified Kitchen Hall Designs</h4>
        <li>
          <span>
            <img src={check} alt="check" /> Enhanced Social Interaction
          </span>
          <p>
             Open kitchen hall designs encourage
            interaction, allowing you to cook, dine, and entertain in one shared
            space.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" /> Improved Natural Light
          </span>
          <p>
            Removing walls between the kitchen and hall allows natural light to
            flow freely, brightening the entire area and creating an airy,
            spacious feel.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" /> Seamless Aesthetic Flow
          </span>
          <p>
            A cohesive design between the kitchen and hall ensures that both
            spaces complement each other, enhancing the overall look of your
            home.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default KitchenHallDesignIntegrate;
