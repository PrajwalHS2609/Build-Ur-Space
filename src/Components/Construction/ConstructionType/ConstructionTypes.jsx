import React from "react";
import InteriorTypesCard from "../../Interior/InteriorTypes/InteriorTypesCard";
import "../Construction.css";
import construction1 from "./../../../Images/constructionResidential.png"
import construction2 from "./../../../Images/view-building_1048944-9520887.jpg";
import construction3 from "./../../../Images/constructiontype3.png";

const ConstructionTypes = () => {
  return (
    <div className="constructionsTypesContainer">
      <InteriorTypesCard
        img={construction1}
        head="RESIDENTIAL TURNKEY"
        // para="Functional Kitchen,Wardrobe and Storage"
      />
      <InteriorTypesCard
        img={construction2}
        head="LIGHT ROOF STRUCTURE "
        // para="TurnKey interior solutions for you home"
      />

      <InteriorTypesCard
        img={construction3}
        head="COMMERCIAL SPACES"
        // para="Expert Solutions to upgrade your home"
      />
    </div>
  );
};

export default ConstructionTypes;
