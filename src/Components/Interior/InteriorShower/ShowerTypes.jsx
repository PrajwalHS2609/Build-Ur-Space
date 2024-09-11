import React from "react";
import house from "./../../../Images/homeRed.png";

const ShowerTypes = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Types of</span> Shower Partitions Available in Bangalore{" "}
      </h2>
      <p>
        At Build Ur Space, we offer a range of shower partitions in Bangalore
        for home to suit different design preferences and budgets:
      </p>

      <li>
        <span>
          <img src={house} alt="house" /> Frameless Glass Shower Partitions:
        </span>
        <p>
          Frameless partitions are a popular choice for those looking for a
          clean and modern appearance. Made from tempered glass, they are
          durable and provide an unobstructed view, creating a sense of openness
          in the bathroom.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Semi-Frameless Glass Shower Partitions:{" "}
        </span>
        <p>
          Semi-frameless partitions offer a perfect balance between style and
          budget. They have minimal framing around the edges, providing a sleek
          look without the higher cost of a fully frameless option.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Frosted Glass Shower Partitions:{" "}
        </span>
        <p>
          For homeowners seeking privacy along with style, frosted glass shower
          partitions are an excellent option. They allow light to pass through
          while obscuring the view, making them ideal for shared bathrooms.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Sliding Glass Shower Partitions:{" "}
        </span>
        <p>
          Sliding partitions are perfect for compact bathrooms where space is a
          concern. They do not require additional clearance space for doors to
          open, making them a functional choice for a shower partition in
          Bangalore for home.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Fixed Panel Shower Partitions:{" "}
        </span>
        <p>
          Fixed panels are non-movable partitions that offer a minimalist design
          and are perfect for walk-in showers. They provide a barrier without
          making the bathroom feel enclosed.{" "}
        </p>
      </li>
    </div>
  );
};

export default ShowerTypes;
