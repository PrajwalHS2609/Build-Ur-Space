import React from "react";
import "./CommercialInterior.css";

const CommercialSectorsCard = (props) => {
  return (
    <div className="commercialCardContainer">
        <div className="commercialCardImg">
          <img src={props.img} alt="" />
          <div className="commercialCardHead">
            <h3>{props.head}</h3>
          </div>
        </div>
    </div>
  );
};

export default CommercialSectorsCard;
