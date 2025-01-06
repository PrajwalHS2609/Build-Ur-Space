import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import check from "./../../../../Images/check.png";

const DuplexHouseAdvantages = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg img={""} alt="Duplex House choosing Img" />{" "}
      <h5>Advantages of Duplex House Construction</h5>
      <ul>
        <li>
          <span>
            <img src={check} alt="check" /> Space Optimization
          </span>
          <p>
            Duplex houses make efficient use of land by offering two units
            within a single structure. This is particularly beneficial in urban
            areas where land availability is limited and expensive.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={check} alt="check" />
            Dual Income Potential
          </span>
          <p>
            With Duplex House Construction, homeowners can live in one unit and
            rent out the other. This setup provides a steady stream of income
            while reducing the financial burden of homeownership.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={check} alt="check" />
            Privacy and Independence{" "}
          </span>
          <p>
            Each unit in a duplex house is designed to function independently,
            ensuring privacy for both occupants. This makes it an excellent
            choice for extended families or those looking to live close to loved
            ones while maintaining separate living spaces.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={check} alt="check" />
            Cost Efficiency{" "}
          </span>
          <p>
            Building a duplex house is often more cost-effective than
            constructing two separate homes. Shared infrastructure, such as
            walls and utilities, reduces overall construction expenses.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={check} alt="check" />
            Customizable Designs{" "}
          </span>
          <p>
            Modern Duplex House Construction allows for innovative designs that
            cater to individual preferences, making it possible to create a home
            that reflects your style.
          </p>{" "}
        </li>
      </ul>
    </div>
  );
};

export default DuplexHouseAdvantages;
