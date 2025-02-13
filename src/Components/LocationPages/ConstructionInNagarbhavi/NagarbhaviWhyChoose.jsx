import React from "react";
import check from "./../../../Images/check.png";

const NagarbhaviWhyChoose = () => {
  return (
    <div className="locationHeadContainer">
      <h2>
        Why Choose <span>BuildUrSpace</span> for House Construction in
        Nagarbhavi?{" "}
      </h2>

      <li>
        <span>
          <img src={check} alt="check" />
          Experienced Team of Professionals{" "}
        </span>
        <p>
          With years of expertise in the construction industry, BuildUrSpace has
          a team of highly skilled architects, engineers, and designers who work
          together to create aesthetically pleasing and structurally sound
          homes.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          2. Customized House Plans and Designs{" "}
        </span>
        <p>
          We understand that every homeowner has unique requirements. Our
          architects create personalized house plans that match your
          preferences, lifestyle, and budget, ensuring a home that perfectly
          fits your vision.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          High-Quality Materials and Construction Standards{" "}
        </span>
        <p>
          We use premium-quality construction materials and follow industry best
          practices to ensure the durability, strength, and longevity of your
          home.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          On-Time Project Completion{" "}
        </span>
        <p>
          Timely completion is one of our core principles. We follow a
          well-planned construction schedule to ensure your project is delivered
          within the agreed timeframe.
        </p>
      </li>
    </div>
  );
};

export default NagarbhaviWhyChoose;
