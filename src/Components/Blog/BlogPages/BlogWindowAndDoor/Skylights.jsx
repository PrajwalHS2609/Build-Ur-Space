import React from 'react'
import skylights from "./../../../../Images/BlogImgs/Trending Window and Door/11.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const Skylights = () => {
  return (
    <div className="waterProofingWhy">
    <WaterProofingImg
      img={skylights}
      alt="skylights"
    />
    <h5>10. Skylights: Letting Light in From Above </h5>
    <p>
      Skylights are an ideal choice for spaces with limited wall space, as
      they bring in light from above. They’re popular in rooms like bathrooms,
      kitchens, and attics, where wall space is limited. The Latest Window
      Designs for House include automated and energy-efficient skylights,
      which make it easier to control the amount of light and ventilation.
    </p>
    <ul>
      <h4>Key Benefits of Skylights:</h4>
      <li>
        <span>
          <img src={point} alt="point" /> They bring natural light to areas
          without large windows.
        </span>
        <span>
          <img src={point} alt="point" /> Energy-efficient models reduce heat
          loss in winter and heat gain in summer.
        </span>
        <span>
          <img src={point} alt="point" /> Ideal for modern homes, skylights
          add a unique architectural element.
        </span>
      </li>
    </ul>
  </div>
  )
}

export default Skylights
