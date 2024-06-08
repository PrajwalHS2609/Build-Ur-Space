import React from "react";
import "./Package.css";
import PackageMenu from "./PackageMenu";
import PackageList from "./PackageList";

const PackageMain = () => {
  return (
    <div className="packageMainContainer">
      <PackageMenu />
      <PackageList />
    </div>
  );
};

export default PackageMain;
