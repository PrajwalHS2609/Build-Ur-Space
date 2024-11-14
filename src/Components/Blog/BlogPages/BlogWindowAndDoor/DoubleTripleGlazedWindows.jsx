import React from "react";
import doubleTripleGlazedWindows from "./../../../../Images/BlogImgs/Trending Window and Door/Double and Triple-Glazed Windows.png";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
const DoubleTripleGlazedWindows = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={doubleTripleGlazedWindows} alt="double Triple Glazed Windows" />
      <h5>
        11. Double and Triple-Glazed Windows: Energy Efficiency at Its Best
      </h5>
      <p>
        In modern homes, energy efficiency is a priority. Double and
        triple-glazed windows are designed to provide excellent insulation,
        keeping your home comfortable year-round. The additional layers of glass
        help to reduce heat transfer, making these windows a smart investment
        for energy-conscious homeowners.
      </p>
      <ul>
        <h4>Key Benefits of Double and Triple-Glazed Windows:</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Superior insulation helps to lower
            heating and cooling costs.
          </span>
          <span>
            <img src={point} alt="point" /> Reduces outside noise, creating a
            quieter living environment.
          </span>
          <span>
            <img src={point} alt="point" /> Enhances the overall energy
            efficiency and value of your home.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default DoubleTripleGlazedWindows;
