import React from "react";
import "./Package.css";

const PackageListCard = (props) => {
  return (
    <div
      className="packageListCardContainer"
      id={props.id}
    >
      <div className="packageListCardHead">
        <h3>{props.head1}</h3>
        <h2>{props.head2}</h2>
      </div>
      <div className="packageListCardMain">{props.accordion}</div>
    </div>
  );
};

export default PackageListCard;
