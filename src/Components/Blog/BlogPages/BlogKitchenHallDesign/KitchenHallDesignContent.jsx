import React from "react";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";
import kitchenHallDesignBanner from "./../../../../Images/BlogImgs/Modern Kitchen and Hall Design/Banner.png";
import KitchenHallDesignHead from "./KitchenHallDesignHead";
import BlogKitchenHallDesignAppeal from "./KitchenHallDesignAppeal";
import KitchenHallDesignIdeas from "./KitchenHallDesignIdeas";
import KitchenHallDesignTips from "./KitchenHallDesignTips";
import KitchenHallDesignPopular from "./KitchenHallDesignPopular";
import KitchenHallDesignInvest from "./KitchenHallDesignInvest";
import KitchenHallDesignStorage from "./KitchenHallDesignStorage";
import KitchenHallDesignIntegrate from "./KitchenHallDesignIntegrate";

const KitchenHallDesignContent = () => {
  return (
    <div className="blogContent">
      <WaterProofingImg
        img={kitchenHallDesignBanner}
        alt="kitchen Hall Design Banner"
      />
      <KitchenHallDesignHead />
      <BlogKitchenHallDesignAppeal />
      <KitchenHallDesignIntegrate />
      <KitchenHallDesignIdeas />
      <KitchenHallDesignTips />
      <KitchenHallDesignStorage />
      <KitchenHallDesignPopular />
      <KitchenHallDesignInvest />
    </div>
  );
};

export default KitchenHallDesignContent;
