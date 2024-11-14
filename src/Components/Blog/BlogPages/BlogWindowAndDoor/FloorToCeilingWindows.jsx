import React from "react";
import point from "./../../../../Images/point.png";
import floortoCeilingWindows from "./../../../../Images/BlogImgs/Trending Window and Door/Floor-to-Ceiling Windows.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const FloortoCeilingWindows = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={floortoCeilingWindows} alt="floortoCeilingWindows" />
      <h5>3. Floor-to-Ceiling Windows: Maximizing Light and View</h5>
      <p>
        For those looking to maximize light, floor-to-ceiling windows are a
        spectacular choice. This Trending Window and Door Option for Modern
        Homes creates an almost seamless connection with the outdoors, offering
        panoramic views that can turn any room into a private oasis. With Latest
        Window Designs for House, these windows come with energy-efficient
        glazing options, reducing the impact on heating and cooling costs.
      </p>
      <ul>
        <h4>Key Benefits of Floor-to-Ceiling Windows:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> They allow an abundance of natural
            light, enhancing the ambiance of any room.
          </span>
          <span>
            <img src={point} alt="point" /> Energy-efficient glass reduces UV
            rays, protecting furniture and flooring.
          </span>
          <span>
            <img src={point} alt="point" /> The panoramic views bring a
            luxurious feel, perfect for homes with scenic surroundings.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FloortoCeilingWindows;
