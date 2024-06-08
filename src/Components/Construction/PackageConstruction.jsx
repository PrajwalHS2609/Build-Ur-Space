import React from "react";
import "../PackagePage/Package.css";
import PackageMenu from "../PackagePage/PackageMenu";
import PackageList from "../PackagePage/PackageList";

const PackageConstruction = () => {
  return (
    <div className="packageMainContainer">
      <PackageMenu />
      <PackageList />
    </div>
  );
};

export default PackageConstruction;
