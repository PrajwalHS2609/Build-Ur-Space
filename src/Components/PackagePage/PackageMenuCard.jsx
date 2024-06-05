import React from "react";
import "./Package.css";
import { Link } from "react-router-dom";
import { useSectionRefs } from "./PackageContext";

const PackageMenuCard = (props) => {
  const { packageRef1 } = useSectionRefs();

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="menuCardContainer"
      onClick={() => scrollToSection(packageRef1)}
    >
      <Link to={props.link}>
        <h2 className="head2">{props.head2}</h2>
        <h1 className="head1">{props.head1}</h1>
      </Link>
    </div>
  );
};

export default PackageMenuCard;
