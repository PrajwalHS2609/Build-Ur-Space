import React from "react";
import "./HomeBlog.css";
import HomeBlogCard from "./HomeBlogCard";
import essentialVastuBanner from "./../../../Images/BlogImgs/EssentialVastuBanner.png";
import falseCeilingBanner from "./../../../Images/BlogImgs/False_ceiling/Banner.png";
import pccConcretingBanner from "./../../../Images/BlogImgs/PccConcreting/Banner.png";

import { Link } from "react-router-dom";
const HomeBlogMain = () => {
  return (
    <div className="homeBlogMain">
      <div className="homeBlogMainContainer">
        <HomeBlogCard
          img={essentialVastuBanner}
          alt="essentialVastuBanner"
          link="/essential-vastu-tips-for-building-your-dream-home"
          head="Essential Vastu Tips for Building Your Dream Home"
          para="Creating a harmonious living space goes beyond aesthetics. Incorporating principles of Vastu Shastra—a traditional Indian system of architecture and ..."
        />
        <HomeBlogCard
          img={falseCeilingBanner}
          alt="falseCeilingBanner"
          link="/everything-you-need-to-know-about-false-ceiling-costs-in-bangalore"
          head="Everything You Need to Know About False Ceiling Costs in Bangalore"
          para="False ceilings, also known as drop ceilings or suspended ceilings, are becoming an integral part of modern interior design in Bangalore. Not only do they enhance..."
        />
        <HomeBlogCard
          img={pccConcretingBanner}
          alt="PCC Concreting Banner"
          link="/building-strong-foundations-with-durable-pcc-concreting-for-your-projects"
          head="Building Strong Foundations with Durable PCC Concreting for Your Projects"
          para="When embarking on any construction project, the foundation is the most critical element that determines its strength and..."
        />
      </div>
      <div className="homeBlogBtn">
        <Link to={"/blog"}>
          <button>View More</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeBlogMain;
