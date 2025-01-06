import React from "react";
import WaterProofingHeader from "../../BlogPages/BlogWaterProofing/WaterProofingHeader/WaterProofingHeader";
import CategoryDoorsAndWindowsCard from "./../CategoryDoorsAndWindows/CategoryDoorsAndWindowsCard";
import howLongBanner from "./../../../../Images/BlogImgs/How_Long_to_Build/Banner.png";
import pccConcretingBanner from "./../../../../Images/BlogImgs/PccConcreting/Banner.png";
import duplexHouseBanner from "./../../../../Images/BlogImgs/Duplex House Construction/Banner.png";

const CategoryConstruction = () => {
  const categoryConstruction = [
    {
      id: 1,
      img: howLongBanner,
      head: "How Long to Build a 30x40 Feet House in Bangalore?",
      para: "Building a house is one of the most exciting, yet complex, projects anyone can undertake. If you are planning to construct a 30x40 Feet House in Bangalore, it’s essential to...",
      link: "/how-long-to-build-a-30x40-feet-house-in-bangalore",
    },
    {
      id: 2,
      img: pccConcretingBanner,
      alt: "PCC Concreting Banner",
      head: "Building Strong Foundations with Durable PCC Concreting for Your Projects",
      para: "When embarking on any construction project, the foundation is the most critical element that determines its strength and...",
      link: "/building-strong-foundations-with-durable-pcc-concreting-for-your-projects",
    },
    {
      id: 3,
      img: duplexHouseBanner,
      alt: "Duplex House Banner",
      link: "/expert-duplex-house-construction-crafting-dreams-for-modern-living",
      head: "Expert Duplex House Construction: Crafting Dreams for Modern Living",
      para: "Building a home is a significant milestone in life, and choosing the right construction style plays a crucial role in defining your ...",
    },
  ];
  return (
    <div className="categoryDoorsAndWindows">
      <WaterProofingHeader head="Construction" />

      <div className="categoryDoorsAndWindows-Wrapper">
        {categoryConstruction.map((item, index) => (
          <CategoryDoorsAndWindowsCard
            key={index}
            img={item.img}
            alt={item.alt}
            head={item.head}
            para={item.para}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryConstruction;
