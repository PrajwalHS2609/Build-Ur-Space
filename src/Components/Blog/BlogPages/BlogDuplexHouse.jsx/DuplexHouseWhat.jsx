import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import duplexHouseWhatBanner from "./../../../../Images/BlogImgs/Duplex House Construction/What is Duplex House Construction.png";

const DuplexHouseWhat = () => {
  return (
    <div className="waterProofingHead">
      <WaterProofingImg img={duplexHouseWhatBanner} alt="Duplex House What Banner" />

      <h3>What is Duplex House Construction?</h3>
      <p>
        A duplex house is a residential structure with two separate living units
        under one roof. These units may share a common wall but have separate
        entrances, ensuring privacy. Duplex houses are popular for their
        dual-purpose functionality, serving as a single-family home or providing
        a rental income opportunity by leasing one unit.
      </p>
      <p>
        <a href="https://buildurspace.com/">Duplex House Construction</a> is
        more than just building a house; it’s about creating a space that
        balances functionality with a touch of luxury.
      </p>
    </div>
  );
};

export default DuplexHouseWhat;
