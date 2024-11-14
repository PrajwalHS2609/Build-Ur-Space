import React from 'react'
import pivotDoors from "./../../../../Images/BlogImgs/Trending Window and Door/Pivot Doors.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const PivotDoors = () => {
  return (
    <div className="waterProofingWhy">
    <WaterProofingImg img={pivotDoors} alt="pivotDoors" />
    <h5>7. Pivot Doors: A Bold and Unique Entry Statement </h5>
    <p>
      For those looking to make a bold statement, pivot doors are an
      innovative choice among Trending Window and Door Options for Modern
      Homes. These doors pivot on a central hinge, creating a unique opening
      and closing mechanism. They’re often larger than standard doors, which
      adds a dramatic effect and gives any home a luxurious look. Pivot doors
      are perfect for entryways and can be customized with various materials
      to suit your aesthetic.
    </p>
    <ul>
      <h4>Key Benefits of Pivot Doors:</h4>
      <li>
        <span>
          <img src={point} alt="point" /> They add a striking, modern look
          that sets the tone for the rest of the home.
        </span>
        <span>
          <img src={point} alt="point" /> Customizable in materials like wood,
          glass, and metal, they suit various styles.
        </span>
        <span>
          <img src={point} alt="point" /> Their unique operation makes them
          memorable and functional.
        </span>
      </li>
    </ul>
  </div>
  )
}

export default PivotDoors
