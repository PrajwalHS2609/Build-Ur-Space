import React from "react";
import "./Blog.css";
import BlogContentCard from "./BlogContentCard";
import waterProofingBanner from "./../../Images/BlogImgs/WaterProofingBlog/Banner.png";
import howLongBanner from "./../../Images/BlogImgs/How_Long_to_Build/Banner.png";
import brickMansoryBanner from "./../../Images/BlogImgs/Brick_Masonry/Banner.png";
import trendingWindowDoorBanner from "./../../Images/BlogImgs/Trending Window and Door/Banner.png";
import essentialVastuBanner from "./../../Images/BlogImgs/EssentialVastuBanner.png";
import kitchenHallDesignBanner from "./../../Images/BlogImgs/Modern Kitchen and Hall Design/Banner.png";
import falseCeilingBanner from "./../../Images/BlogImgs/False_ceiling/Banner.png";
import pccConcretingBanner from "./../../Images/BlogImgs/PccConcreting/Banner.png";

const BlogContent = () => {
  return (
    <div className="blogContent">
      <BlogContentCard
        img={waterProofingBanner}
        alt="waterproofing-materials"
        link="/top-waterproofing-materials-worth-investing-in-for-your-new-home"
        head="Top Waterproofing Materials worth Investing In for Your New Home"
        para="Building a new home is one of the most significant investments you'll ever make, and safeguarding it from damage is essential for maintaining..."
      />
      <BlogContentCard
        img={howLongBanner}
        alt="build-a-30x40"
        link="/how-long-to-build-a-30x40-feet-house-in-bangalore"
        head="How Long to Build a 30x40 Feet House in Bangalore?"
        para="Building a house is one of the most exciting, yet complex, projects anyone can undertake. If you are planning to construct a 30x40 Feet House in Bangalore, it’s essential to..."
      />
      <BlogContentCard
        img={brickMansoryBanner}
        alt="current-types-of-brick"
        link="/current-types-of-brick-masonry-in-use-today"
        head="Current Types of Brick Masonry in Use Today"
        para="Brick masonry for home construction remains one of the most popular and enduring building methods across the globe. With roots tracing back thousands of years, this technique..."
      />
      <BlogContentCard
        img={essentialVastuBanner}
        alt="essentialVastuBanner"
        link="/essential-vastu-tips-for-building-your-dream-home"
        head="Essential Vastu Tips for Building Your Dream Home"
        para="Creating a harmonious living space goes beyond aesthetics. Incorporating principles of Vastu Shastra—a traditional Indian system of architecture and ..."
      />
      <BlogContentCard
        img={trendingWindowDoorBanner}
        alt="trendingWindowDoorBanner"
        link="/trending-window-and-door-options-for-modern-homes"
        head="Trending Window and Door Options for Modern Homes: Elevating Style and Functionality"
        para="In contemporary home design, windows and doors are far more than structural elements; they define the character, enhance energy efficiency, and..."
      />
      <BlogContentCard
        img={kitchenHallDesignBanner}
        alt="kitchenHallDesignBanner"
        link="/modern-kitchen-and-hall-design-ideas-for-your-home"
        head="Modern Kitchen and Hall Design Ideas for Your Home"
        para="When it comes to designing your home, the kitchen and hall are two spaces that hold significant importance. The kitchen is the heart of the home, where ..."
      />
      <BlogContentCard
        img={falseCeilingBanner}
        alt="false Ceiling Banner"
        link="/everything-you-need-to-know-about-false-ceiling-costs-in-bangalore"
        head="Everything You Need to Know About False Ceiling Costs in Bangalore"
        para="False ceilings, also known as drop ceilings or suspended ceilings, are becoming an integral part of modern interior design in Bangalore. Not only do they enhance..."
      />
      <BlogContentCard
        img={pccConcretingBanner}
        alt="PCC Concreting Banner"
        link="/building-strong-foundations-with-durable-pcc-concreting-for-your-projects"
        head="Building Strong Foundations with Durable PCC Concreting for Your Projects"
        para="When embarking on any construction project, the foundation is the most critical element that determines its strength and..."
      />
    </div>
  );
};

export default BlogContent;
