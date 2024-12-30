import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import pccConcretingFutureImg from "./../../../../Images/BlogImgs/PccConcreting/The Future of PCC Concreting.png";

const PccConcretingFuture = () => {
  return (
    <div className="waterProofingWhy">
      <WaterProofingImg
        img={pccConcretingFutureImg}
        alt="Pcc Concreting Future Img"
      />
      <h5>The Future of PCC Concreting</h5>
      <p>
        With advancements in technology,{" "}
        <a href="https://buildurspace.com/building-strong-foundations-with-durable-pcc-concreting-for-your-projects">
          PCC concreting is becoming more efficient and sustainable
        </a>
        . Innovations like self-compacting concrete and eco-friendly additives
        are transforming the way we build. These developments not only enhance
        the quality of construction but also reduce the environmental impact.
      </p>
    </div>
  );
};

export default PccConcretingFuture;
