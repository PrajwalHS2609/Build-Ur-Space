import React from "react";
import check from "./../../../Images/check.png";
import "./../LocationStyle.css"

const MSPalyaWhy = () => {
  return (
    <div className="locationHeadContainer">
      <h2><span>Why</span> MS Palya is an Ideal Location for Your New Home </h2>
      <p>
        MS Palya is rapidly becoming one of Bangalore’s most sought-after
        residential areas. Here’s why you should consider building your home
        here:
      </p>
      <li>
        <span>
          <img src={check} alt="check" />
          Connectivity:{" "}
        </span>
        <p>
          MS Palya is well-connected to major parts of Bangalore, including
          Rajajinagar, Vijayanagar, and the Outer Ring Road.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Infrastructure:{" "}
        </span>
        <p>
          The area boasts excellent schools, hospitals, shopping centers, and
          recreational facilities.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" /> Green Spaces:
        </span>
        <p>
          With its blend of urban conveniences and natural surroundings, MS
          Palya offers a serene environment for families.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Future Growth:{" "}
        </span>
        <p>
          Ongoing developments make this a promising investment opportunity,
          with rising property values over time.
        </p>
      </li>
      <p>
        Choosing a <a href="https://buildurspace.com/home-and-commercial-construction">house construction company in MS Palya</a> ensures that your
        project is designed to maximize the potential of this thriving location.
      </p>
    </div>
  );
};

export default MSPalyaWhy;
