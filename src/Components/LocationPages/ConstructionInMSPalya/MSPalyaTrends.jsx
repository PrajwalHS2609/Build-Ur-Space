import React from "react";
import point from "./../../../Images/point.png";
import "./../LocationStyle.css"

const MSPalyaTrends = () => {
  return (
    <div className="locationHeadContainer">
      <h2><span>Trends</span> in House Construction on MS Palya</h2>
      <p>
        Staying updated with the latest trends can inspire your home design and
        construction project. Some popular trends in the MS Palya area include:
      </p>
      <li>
        <span>
          <img src={point} alt="point" />
          Sustainable Construction:{" "}
        </span>
        <p>
          Eco-friendly materials, solar panels, and rainwater harvesting
          systems.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Minimalist Designs:{" "}
        </span>
        <p>
          Clean lines, neutral colors, and open spaces for a modern aesthetic.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" /> Smart Homes:
        </span>
        <p>
          Integration of technology for lighting, security, and climate control.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Multi-Functional Spaces:{" "}
        </span>
        <p>
          Flexible layouts that adapt to changing needs, such as home offices
          and entertainment zones.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Green Landscaping: Growth:{" "}
        </span>
        <p>
          Incorporation of native plants, vertical gardens, and rooftop gardens.
        </p>
      </li>
    </div>
  );
};

export default MSPalyaTrends;
