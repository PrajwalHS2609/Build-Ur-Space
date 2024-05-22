import React from "react";
import "./HomeHeader.css";
import logo from "../../../Images/Buildurspace-removebg-preview.png";

const HomeHeaderImgTxt = () => {
  return (
    <div className="homeHeaderImgTxt">
      <div className="homeHeaderImgTxtContainer">
        <img src={logo} alt="" />
      </div>
      <div className="homeHeaderImgTxtHead">
        <h1>Be Bold Be Beautiful Be Home</h1>
      </div>
      <div className="homeHeaderImgTxtWel">
        <p>
          Welcome to <span>BUILD UR SPACE</span>, your trusted partner in construction
          solutions.
        </p>
      </div>
      <div className="homeHeaderImgTxtPara">
        <div className="homeHeaderImgTxtItem">
          <p>7 team members</p>
        </div>
        <div className="homeHeaderImgTxtItem">
          <p>4 years in business</p>
        </div>
        <div className="homeHeaderImgTxtItem">
          <p>72 happy customers</p>
        </div>
      </div>
    </div>
  );
};

export default HomeHeaderImgTxt;
