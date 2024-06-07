import React from "react";
import PackageMenuCard from "./PackageMenuCard";
import { useSectionRefs } from "./PackageContext";

const PackageMenu = () => {
  const { packageRef1, packageRef2, packageRef3, packageRef4, packageRef5 } =
    useSectionRefs();

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      window.scrollTo({
        top: sectionRef.current.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.log("Section Ref is null:", sectionRef);
    }
  };
  return (
    <div className="packageMenuContainer">
      <PackageMenuCard
        onClick={() => scrollToSection(packageRef1)}
        head2="STANDARD"
        head1="Rs 1850/*- Sq Ft"
        link="/packages/product-package1"
      />
      <PackageMenuCard
        onClick={() => scrollToSection(packageRef2)}
        head2="CLASSIC"
        head1="Rs 1999/*- Sq Ft"
        link="/packages/product-package1"
      />
      <PackageMenuCard
        onClick={() => scrollToSection(packageRef3)}
        head2="PREMIUM"
        head1="Rs 2099/*- Sq Ft"
        link="/packages/product-package1"
      />
      <PackageMenuCard
        onClick={() => scrollToSection(packageRef4)}
        head2="ELITE"
        head1="Rs 2249/*- Sq Ft"
        link="/packages/product-package1"
      />
      <PackageMenuCard
        onClick={() => scrollToSection(packageRef5)}
        head2="EXCLUSIVE"
        head1="Rs 2499/*- Sq Ft"
        link="/packages/product-package1"
      />
    </div>
  );
};

export default PackageMenu;
