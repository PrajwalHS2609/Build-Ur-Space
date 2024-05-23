import React from "react";
import "./HomeWhy.css";
import HomeWhyCard from "./HomeWhyCard";
import icon1 from "./../../../Images/Icon1.png"
const HomeWhyMain = () => {
  return (
    <div className="homeWhyMainContainer">
      <HomeWhyCard
        img={icon1}
        // head="Safe Money Transaction"
        para="Human-centric design"
      />
      <HomeWhyCard
        img="https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-1.svg"
        // head="Absolute Transparency"
        para=" End-to-end solution"
      />
      <HomeWhyCard
        img="https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-4.svg"
        // head="Assured Quality Control"
        para=" Timely Delivery"
      />
      <HomeWhyCard
        img="https://bricknbolt-gallery.s3.ap-south-1.amazonaws.com/lp-construction-request-page/brick-bolt-payment-i-ilustration-2.svg"
        head="Zero Delays"
        para=" Superior Quality check"
      />
      <HomeWhyCard img="" para="No hidden cost" />
      <HomeWhyCard
        img=""
        para=" 72,000+ sq ft area constructed 
& delivered "
      />
      <HomeWhyCard
        img=""
        para="10 years warranty*,
 1-year service warranty"
      />
      <HomeWhyCard img="" para="No sub-contracting" />
    </div>
  );
};

export default HomeWhyMain;
