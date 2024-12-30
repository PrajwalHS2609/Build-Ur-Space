import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import pccConcretingWhat from "./../../../../Images/BlogImgs/PccConcreting/What is PCC Concreting.png";

const PccConcretingWhat = () => {
  return (
    <div className="waterProofingHead">
      <WaterProofingImg img={pccConcretingWhat} alt="PCC Concreting What" />

      <h3>What is PCC Concreting?</h3>
      <p>
        PCC, or <a href="https://buildurspace.com/building-strong-foundations-with-durable-pcc-concreting-for-your-projects">Plain Cement Concrete</a>, is a mixture of cement, fine aggregate
        (sand), coarse aggregate (gravel or crushed stone), and water. Unlike
        reinforced concrete, PCC does not include steel reinforcement. It is
        primarily used to provide a strong, level base for foundations,
        flooring, and other structural elements.
      </p>
    </div>
  );
};

export default PccConcretingWhat;
