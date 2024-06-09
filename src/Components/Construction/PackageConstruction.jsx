import React from "react";
import "../PackagePage/Package.css";
import PackageMenu from "../PackagePage/PackageMenu";
import PackageList from "../PackagePage/PackageList";
import PackageHead from './../PackagePage/PackageHead';

const PackageConstruction = () => {
  return (
    <div className="packageMainContainer">
      <PackageHead/>
      <PackageMenu />
      <PackageList />
    </div>
  );
};

export default PackageConstruction;
