import React from "react";
import customDoor from "./../../../../Images/BlogImgs/Trending Window and Door/Custom Doors.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";

const CustomDoors = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={customDoor}
        alt="Custom Door"
      />
      <h5>12. Custom Doors: Personalizing Your Entryway</h5>
      <p>
        Custom doors allow you to design an entryway that aligns with your
        personal style and the architecture of your home. Whether you prefer
        sleek metal doors, warm wooden doors, or glass-paneled doors, custom
        designs provide endless possibilities. A custom door can serve as a
        focal point, adding character and enhancing the curb appeal of your
        home.
      </p>
      <ul>
        <h4>Key Benefits of Custom Doors:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Personalized to suit your taste and
            home style.
          </span>
          <span>
            <img src={point} alt="point" /> Custom materials and finishes allow
            for unique designs.
          </span>
          <span>
            <img src={point} alt="point" /> Adds significant aesthetic and
            resale value to your property.
          </span>
        </li>
      </ul>
      <br />
      <p>
        When it comes to Trending Window and Door Options for Modern Homes,
        there is a wide array of choices to suit every style and need. From
        sleek sliding doors that connect you to nature to energy-efficient smart
        windows and custom doors that make a statement, each option brings
        unique benefits. The latest Modern Window & Door Designs are not only
        about aesthetics but also enhance functionality, efficiency, and comfort
        in your living spaces.
      </p>
      <p>
        At Build Ur Space, we specialize in helping you find the perfect windows
        and doors for your home. Our team can assist you in selecting Latest
        Window Designs for House that align with your design preferences and
        ensure your home’s entry points make a lasting impression. Contact us
        today to transform your home’s aesthetic and functionality with the
        perfect blend of modern window and door solutions.
      </p>
    </div>
  );
};

export default CustomDoors;
