import React from "react";
import PackageListCard from "./PackageListCard";
import PremiumPackage from "./PremiumPackage";
import StandardPackage from "./StandardPackage";
import ClassicPackage from "./ClassicPackage";
import ElitePackage from "./ElitePackage";
import ExclusivePackage from "./ExclusivePackage";

const PackageList = () => {
  return (
    <div className="packageListContainer">
      <PackageListCard
        id="packageList1"
        head1="STANDARD"
        head2="Rs. 1850/*-Sq Ft"
        accordion={<StandardPackage />}
      />
      <PackageListCard
        id="packageList2"
        head1="CLASSIC"
        head2="Rs.1999/*-Sq Ft"
        accordion={<ClassicPackage />}
      />
      <PackageListCard
        id="packageList3"
        head1="PREMIUM"
        head2="Rs.2099/*-Sq Ft"
        accordion={<PremiumPackage />}
      />
      <PackageListCard
        id="packageList4"
        head1="ELITE"
        head2="Rs.2249/*-Sq Ft"
        accordion={<ElitePackage />}
      />
      <PackageListCard
        id="packageList5"
        head1="EXCLUSIVE"
        head2="Rs.2499/*-Sq Ft"
        accordion={<ExclusivePackage />}
      />
    </div>
  );
};

export default PackageList;
