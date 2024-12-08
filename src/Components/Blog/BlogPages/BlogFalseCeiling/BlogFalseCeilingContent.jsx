import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import falseCeilingBanner from "./../../../../Images/BlogImgs/False_ceiling/Banner.png";
import BlogFalseCeilingHead from "./BlogFalseCeilingHead";
import BlogFalseCeilingWhat from "./BlogFalseCeilingWhat";
import BlogFalseCeilingFactors from "./BlogFalseCeilingFactors";
import BlogFalseCeilingAvg from "./BlogFalseCeilingAvg";
import BlogFalseCeilingBenefits from "./BlogFalseCeilingBenefits";
import BlogFalseCeilingHow from "./BlogFalseCeilingHow";
import BlogFalseCeilingTips from "./BlogFalseCeilingTips";

const BlogFalseCeilingContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg img={falseCeilingBanner} alt="false Ceiling Banner" />
      <BlogFalseCeilingHead />
      <BlogFalseCeilingWhat />
      <BlogFalseCeilingFactors />
      <BlogFalseCeilingAvg />
      <BlogFalseCeilingBenefits />
      <BlogFalseCeilingHow/>
      <BlogFalseCeilingHow/>
      <BlogFalseCeilingTips/>
    </div>
  );
};

export default BlogFalseCeilingContent;
