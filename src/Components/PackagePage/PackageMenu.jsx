import React from "react";
import PackageMenuCard from "./PackageMenuCard";

const PackageMenu = () => {
  return (
    <div className="packageMenuContainer">
      <PackageMenuCard
        head2="Essentials"
        head1="Rs 1620/*- Sq Ft"
        link="/packages/product-package1"
      />
      <PackageMenuCard
        head2="Premium"
        head1="Rs 1770/*- Sq Ft"
        link="/packages/product-package2"
      />
          <PackageMenuCard
        head2="Luxury"
        head1="Rs 2235/*- Sq Ft"
        link="/packages/product-package3"
      />
    </div>
  );
};

export default PackageMenu;
