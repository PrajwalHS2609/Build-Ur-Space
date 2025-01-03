import React from "react";
import check from "./../../../Images/check.png";

const HomeBenefits = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        The Benefits of Choosing <span>Buildurspace</span> for Home Interiors in
        Bangalore
      </h2>
      <p>
        Choosing Buildurspace for your{" "}
        <a href="https://buildurspace.com/">home interiors in Bangalore</a>{" "}
        offers numerous benefits:
      </p>
      <li>
        <span>
          <img src={check} alt="check" />
          Time Efficiency:{" "}
        </span>
        <p>
          Our streamlined processes and project management skills ensure timely
          completion of your interior design project, saving you time and
          hassle.
        </p>
      </li>

      <li>
        <span>
          <img src={check} alt="check" /> Cost-Effective Solutions:
        </span>
        <p>
          We offer affordable interior design solutions that provide maximum
          value for your money.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Access to the Latest Trends:{" "}
        </span>
        <p>
          Stay ahead of the curve with our access to the latest trends and
          technologies in home interiors in Bangalore.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Stress-Free Experience:{" "}
        </span>
        <p>
          Our end-to-end services provide a stress-free experience, allowing you
          to focus on enjoying your newly designed home.
        </p>
      </li>
    </div>
  );
};

export default HomeBenefits;
