import React from "react";
import "./CommercialInterior.css";
import { Link } from "react-router-dom";

const CommercialSectorsCard = (props) => {
  return (
    <div className="commercialCardContainer">
      <Link>
        <div className="commercialCardImg">
          <img src={props.img} alt="" />
          <div className="commercialCardHead">
            <h2>{props.head}</h2>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CommercialSectorsCard;
