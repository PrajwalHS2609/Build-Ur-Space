import React from "react";
import "./Package.css"
import PackageDrop from "./PackageDrop";
const PackageCard = () => {
  return <div className="packageCardContainer">
    <div className="packageCardHead">
      <h3>Basic Package-$1.810/sq.ft <span>(incl.GST)</span></h3>
    </div>
    <PackageDrop/>
    <PackageDrop/>
  </div>;
};

export default PackageCard;
