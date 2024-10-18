import React from "react";
import "./InteriorTypes.css";
import InteriorTypesCard from "./InteriorTypesCard";
import interior1 from "../../../Images/modular Interior.jpg";
import interior2 from "./../../../Images/full home interior.jpg";
import interior3 from "./../../../Images/homeRenovation.jpg";
import interior4 from "./../../../Images/commerciaInterior.jpg";
import { Link } from "react-router-dom";
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
      {/* <InteriorTypesCard
        link="/commercial-interior-design"
        img={interior4}
        head="Commercial Interiors"
        para=" Hassle-free solutions fro your workspace"
      /> */}
      <div className="interiorTypeCardContainer">
        <Link to={"/commercial-interior-design"}>
          <div className="interiorTypeCardImg">
            <img src={interior4} alt="interior4" loading="lazy" />
          </div>
          <div className="interiorTypeCardTxt">
            <div className="interiorTypeCardHead">
              <h2>Commercial Interiors</h2>
            </div>
            <div className="interiorTypeCardPara">
              <p>Hassle-free solutions fro your workspace</p>
            </div>
          </div>
          <div className="interiorTypeCardNavi">
            <button>Explore</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default InteriorTypesMain;
