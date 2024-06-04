import React from "react";
import "./CommercialInterior.css";

const CommercialSectorsCard = (props) => {
  return (
    <div className="commercialCardContainer">
        <div className="commercialCardImg">
          <img src={props.img} alt="" />
          <div className="commercialCardHead">
            <h2>{props.head}</h2>
          </div>
        </div>
    </div>
  );
};

export default CommercialSectorsCard;
