import React from "react";
import PackageListCard from "./PackageListCard";
import EssentialPackage from "./EssentialPackage";
import PremiumPackage from "./PremiumPackage";
import LuxuryPackage from "./LuxuryPackage";

const PackageList = () => {
  return (
    <div className="packageListContainer">
      <PackageListCard
        head1="Essentials"
        head2="Rs.1620/*-Sq Ft"
        accordion={<EssentialPackage />}
      />
      <PackageListCard
        head1="Premium"
        head2="Rs.1770/*-Sq Ft"
        accordion={<PremiumPackage />}
      />
      <PackageListCard
        head1="Luxury"
        head2="Rs.2235/*-Sq Ft"
        accordion={<LuxuryPackage/>}
      />
    </div>
  );
};

export default PackageList;
