import React from "react";
import house from "./../../../Images/homeRed.png";

const ToughenedGlassPartitionApplication = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        Applications of <span>Toughened Glass Partition</span> in Bangalore{" "}
      </h2>
      <p>
        Toughened glass partitions are versatile and suitable for various
        settings, making them a great solution for both residential and
        commercial properties:
      </p>
      <li>
        <span>
          <img src={house} alt="house" />
          Corporate Offices:{" "}
        </span>
        <p>
          A toughened glass partition in Bangalore is ideal for creating private
          offices, meeting rooms, and collaborative workspaces while maintaining
          a modern aesthetic.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Retail Spaces:{" "}
        </span>
        <p>
          Toughened glass partitions allow retailers to create attractive
          display areas while enhancing visibility, adding a touch of elegance
          to any store.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Residential Interiors:{" "}
        </span>
        <p>
          Use a toughened glass partition in Bangalore to separate spaces within
          the home, such as living and dining areas or home offices, creating a
          more open and connected environment.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Restaurants and Cafes:{" "}
        </span>
        <p>
          Toughened glass partitions are perfect for dividing dining areas,
          creating intimate spaces while allowing natural light to flow freely.
        </p>
      </li>
    </div>
  );
};

export default ToughenedGlassPartitionApplication;
