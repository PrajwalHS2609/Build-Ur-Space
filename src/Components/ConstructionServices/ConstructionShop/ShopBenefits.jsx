import React from "react";
import check from "./../../../Images/check.png";

const ShopBenefits = () => {
  return (
    <div className="constructionHeadContainer">
      <h2>
        Benefits of Choosing <span>Build Ur Space</span> for Shop Construction
        in Bangalore{" "}
      </h2>
      <li>
        <span>
          <img src={check} alt="check" />
          Expertise and Experience:
        </span>
        <p>
          Our team at Build Ur Space has extensive experience in shop
          construction in Bangalore, providing you with expert guidance and
          reliable solutions for your commercial space needs.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Tailored Solutions:{" "}
        </span>
        <p>
          We offer customized solutions that align with your business
          requirements, ensuring that your shop is designed and constructed to
          enhance your operations and customer experience.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" /> High-Quality Construction:
        </span>
        <p>
          We use top-quality materials and construction techniques to deliver a
          durable and aesthetically pleasing shop that stands the test of time.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Timely Completion:{" "}
        </span>
        <p>
          We manage the project efficiently to ensure that shop construction in
          Bangalore is completed on schedule, allowing you to open your business
          and start operations without delays.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Cost Efficiency:{" "}
        </span>
        <p>
          Our cost-effective solutions and transparent pricing help you manage
          your budget effectively while achieving high-quality results in shop
          construction in Bangalore.
        </p>
      </li>
    </div>
  );
};

export default ShopBenefits;
