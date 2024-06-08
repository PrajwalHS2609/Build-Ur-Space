import React from "react";
import PackageMenuCard from "./PackageMenuCard";
const PackageMenu = () => {
  return (
    <div className="packageMenuContainer">
      <PackageMenuCard
        head2="STANDARD"
        head1="Rs 1850/*- Sq Ft"
        link="packageList1"
      />
      <PackageMenuCard
        head2="CLASSIC"
        head1="Rs 1999/*- Sq Ft"
        link="packageList1"
      />
      <PackageMenuCard
        head2="PREMIUM"
        head1="Rs 2099/*- Sq Ft"
        link="packageList1"
      />
      <PackageMenuCard
        head2="ELITE"
        head1="Rs 2249/*- Sq Ft"
        // link="/packages/product-package1"
      />
      <PackageMenuCard
        head2="EXCLUSIVE"
        head1="Rs 2499/*- Sq Ft"
        // link="/packages/product-package1"
      />
    </div>
  );
};

export default PackageMenu;
