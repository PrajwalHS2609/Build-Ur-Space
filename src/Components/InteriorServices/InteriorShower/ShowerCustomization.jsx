import React from "react";
import point from "./../../../Images/point.png";

const ShowerCustomization = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Customization Options</span> for Shower Partitions in Bangalore
        Homes
      </h2>
      <p>
        Glass partitions have become a popular choice for both residential and
        commercial spaces due to their versatility and modern appeal. Here’s why
        opting for glass partition in Bangalore is a smart decision:
      </p>
      <li>
        <span>
          <img src={point} alt="check" />
          Glass Type:{" "}
        </span>
        <p>
          Choose from clear, frosted, tinted, or textured glass based on your
          privacy needs and design preferences.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="check" />
          Hardware Finish:{" "}
        </span>
        <p>
          We offer a variety of hardware finishes, such as chrome, brushed
          nickel, black, and gold, to complement the overall bathroom décor.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="check" />
          Size and Shape:
        </span>
        <p>
          Our shower partitions can be customized to fit any bathroom size and
          layout, whether you need a corner partition, a walk-in shower panel,
          or a full enclosure.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="check" />
          Additional Features:{" "}
        </span>
        <p>
          Consider adding features like towel bars, corner shelves, or a sliding
          door mechanism for added convenience and functionality.
        </p>
      </li>
    </div>
  );
};

export default ShowerCustomization;
