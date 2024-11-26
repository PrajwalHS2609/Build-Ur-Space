import React from "react";
import windowAndDoorBanner from "./../../../../Images/BlogImgs/Trending Window and Door/Banner.png";
import "./CategoryDoorsAndWindows.css";
import CategoryDoorsAndWindowsCard from './CategoryDoorsAndWindowsCard';
import WaterProofingHeader from "../../BlogPages/BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
const CategoryDoorsAndWindows = () => {
  return (
    <div className="categoryDoorsAndWindows">
      <WaterProofingHeader head="Doors & Windows" />

      <div className="categoryDoorsAndWindows-Wrapper">
        <CategoryDoorsAndWindowsCard
          img={windowAndDoorBanner}
          head="Trending Window and Door Options for Modern Homes: Elevating Style and Functionality"
          para="In contemporary home design, windows and doors are far more than structural elements; they define the character, enhance energy efficiency, and..."
          link="/trending-window-and-door-options-for-modern-homes"
        />
      </div>
    </div>
  );
};

export default CategoryDoorsAndWindows;
