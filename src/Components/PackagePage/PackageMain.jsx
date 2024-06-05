import React from "react";
import "./Package.css";
import PackageMenu from "./PackageMenu";
import PackageDisplay from "./PackageDisplay";

const PackageMain = () => {
  return (
    <div className="packageMainContainer">
      <PackageMenu />
      <PackageDisplay />
    </div>
  );
};

export default PackageMain;
