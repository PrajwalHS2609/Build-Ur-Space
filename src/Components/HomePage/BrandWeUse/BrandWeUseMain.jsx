import React from "react";
import "./BrandWeUse.css";
import constPartner from "./../../../Images/constructionPartner.jpg";
const BrandWeUseMain = () => {
  return (
    <div className="brandMainContainer">
      <div className="brandMainContent1">
        <img src={constPartner} alt="" />
      </div>
      <div className="brandMainContent2">
        <p>
          Taim India Construction is proud to be our trusted construction
          partner in Chitradurga. With a commitment to quality and excellence,
          we bring your visions to life, ensuring every project is executed with
          precision and care. Trust us to build spaces that inspire and endure.
        </p>
      </div>
    </div>
  );
};

export default BrandWeUseMain;
