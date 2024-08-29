import React from "react";
import house from "./../../../Images/homeRed.png";

const ToughenedTypes = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Types of Toughened Glass Skylights</span> Available in Bangalore{" "}
      </h2>
      <p>
        At Build Ur Space, we provide a wide range of toughened glass skylight
        in Bangalore for home options to match your preferences and
        requirements:
      </p>

      <li>
        <span>
          <img src={house} alt="house" />
          Fixed Skylights:
        </span>
        <p>
          These are non-operable skylights that provide uninterrupted natural
          light. They are ideal for rooms that require constant daylight but do
          not need ventilation.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Ventilated Skylights:{" "}
        </span>
        <p>
          These skylights can be opened to allow fresh air into the home. They
          are perfect for areas like kitchens and bathrooms where ventilation is
          essential.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Tubular Skylights:{" "}
        </span>
        <p>
          Tubular skylights are compact and designed to direct sunlight through
          a reflective tube. This type of toughened glass skylight in Bangalore
          for home is ideal for small spaces like hallways and closets.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Pyramid Skylights:{" "}
        </span>
        <p>
          Pyramid skylights are architectural skylights that add a unique design
          element to flat roofs. The pyramid shape allows more light to enter
          and adds a dramatic flair to the home’s aesthetics.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Dome Skylights:{" "}
        </span>
        <p>
          These skylights feature a dome-shaped design that allows for more
          light to enter from various angles. They are excellent for larger
          spaces and add an artistic touch to the overall design of your home.
        </p>
      </li>
    </div>
  );
};

export default ToughenedTypes;
