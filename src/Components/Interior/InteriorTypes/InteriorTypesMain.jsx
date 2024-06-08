import React from "react";
import "./InteriorTypes.css";
import InteriorTypesCard from "./InteriorTypesCard";
import interior1 from "../../../Images/modular Interior.jpg";
import interior2 from "./../../../Images/full home interior.jpg";
import interior3 from "./../../../Images/homeRenovation.jpg";
import interior4 from "./../../../Images/commerciaInterior.jpg";
const InteriorTypesMain = () => {
  return (
    <div className="interiorTypeMainContainer">
      <InteriorTypesCard
        img={interior1}
        head="Modular Interior"
        para="Functional Kitchen,Wardrobe and Storage"
      />
      <InteriorTypesCard
        img={interior2}
        head="Full Home Interiors"
        para="TurnKey interior solutions for you home"
      />

      <InteriorTypesCard
        img={interior3}
        head="Renovations"
        para="Expert Solutions to upgrade your home"
      />
      <InteriorTypesCard
        link="/commercial-interior-design"
        img={interior4}
        head="Commercial Interiors"
        para=" Hassle-free solutions fro your workspace"
      />
    </div>
  );
};

export default InteriorTypesMain;
