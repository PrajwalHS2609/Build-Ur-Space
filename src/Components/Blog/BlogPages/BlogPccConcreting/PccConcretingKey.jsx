import React from "react";
import house from "./../../../../Images/homeRed.png";

const PccConcretingKey = () => {
  return (
    <div className="waterProofingWhy">

      <h5>Key Benefits of PCC Concreting</h5>
      <ul>
        <li>
          <span>
            <img src={house} alt="house" /> Strength and Durability
          </span>
          <p>
            PCC concreting is renowned for its ability to withstand heavy loads
            and resist wear and tear. Its composition ensures a solid base that
            prevents settlement and provides long-lasting support.
          </p>
          <br />
          <span>
            <img src={house} alt="house" /> Versatility
          </span>
          <p>
            From roads and pavements to flooring and retaining walls, PCC
            concreting is versatile and can be adapted for various applications.
          </p>
          <br />
          <span>
            <img src={house} alt="house" />
            Cost-Effective
          </span>
          <p>
            PCC is an economical solution for creating a stable foundation. Its
            simple composition and ease of application make it a cost-effective
            choice for construction projects.
          </p>
          <br />
          <span>
            <img src={house} alt="house" />
            Crack Resistance{" "}
          </span>
          <p>
            With proper curing and application, PCC reduces the risk of
            cracking, ensuring a smoother finish and enhanced structural
            integrity.
          </p>
          <br />
          <span>
            <img src={house} alt="house" />
            Water Resistance{" "}
          </span>
          <p>
            PCC concreting is resistant to water penetration, making it an
            excellent choice for damp-proofing and preventing structural damage
            caused by moisture.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PccConcretingKey;
