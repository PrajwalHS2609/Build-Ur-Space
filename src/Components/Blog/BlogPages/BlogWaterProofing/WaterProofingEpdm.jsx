import React from "react";
import point from "./../../../../Images/point.png";
import WaterProofingImg from "./WaterProofingImg/WaterProofingImg";
import waterProofingEpdm from "./../../../../Images/BlogImgs/WaterProofingBlog/EPDM (Ethylene Propylene Diene Monomer) Rubber.png";

const WaterProofingEpdm = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={waterProofingEpdm}
        alt="waterProofingEpdm"
      />
      <h5>5. EPDM (Ethylene Propylene Diene Monomer) Rubber</h5>
      <p>
        EPDM rubber is one of the top waterproofing materials for home use,
        particularly in areas that need strong resistance to UV rays and
        temperature fluctuations. It is a synthetic rubber membrane that is
        highly durable and flexible, making it ideal for roofs.
      </p>
      <ul>
        <h4>Advantages:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Resistant to UV radiation and ozone.{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Long-lasting (can last over 30 years with proper maintenance).{" "}
          </span>
        </li>{" "}
        <li>
          <span>
            <img src={point} alt="point" />
            Flexible and easy to install.
          </span>
        </li>
      </ul>
      <ul>
        <h4>Best Use:</h4>
        <li>
          <span>
            <img src={point} alt="point" />
            Ideal for flat and low-slope roofs, as well as garden terraces.
          </span>
        </li>{" "}
      </ul>
      <br />
    </div>
  );
};

export default WaterProofingEpdm;
