import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import kitchenHallDesignTips from "./../../../../Images/BlogImgs/Modern Kitchen and Hall Design/Kitchen Hall Designs_ Creating a Welcoming Space.png";
import check from "./../../../../Images/check.png";

const KitchenHallDesignTips = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={kitchenHallDesignTips}
        alt="Kitchen Hall Design Tips"
      />
      <h5>Kitchen Hall Designs: Creating a Welcoming Space </h5>
      <p>
        While the kitchen is the functional hub of the home, the hall serves as
        the first impression. Combining these two spaces through thoughtful
        kitchen hall designs can elevate your home's overall appeal.
      </p>
      <ul>
        <h4>Key Features of Modern Kitchen Designs</h4>
        <li>
          <span>
            <img src={check} alt="check" /> Define Zones
          </span>
          <p>
            Use rugs, lighting, or furniture placement to define the kitchen and
            hall areas within an open-plan layout. For example, a kitchen island
            can act as a divider while still maintaining connectivity.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" /> Choose a Unified Color Palette
          </span>
          <p>
             A cohesive color scheme ties the
            kitchen and hall together. Opt for complementary colors that flow
            seamlessly from one space to the next.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" /> Statement Elements
          </span>
          <p>
            Incorporate a statement piece in the hall, such as an eye-catching
            chandelier or an art piece, to make the space stand out while
            complementing the kitchen's design.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" /> Functional Furniture
          </span>
          <p>
            If your hall includes a dining area, choose functional and stylish
            furniture that works well with your kitchen's layout and aesthetic.
          </p>
        </li>
        <li>
          <span>
            <img src={check} alt="check" /> Lighting for Both Spaces
          </span>
          <p>
            Layered lighting is essential for both the kitchen and hall. Use
            task lighting in the kitchen for functionality and ambient lighting
            in the hall for a warm, inviting feel.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default KitchenHallDesignTips;
