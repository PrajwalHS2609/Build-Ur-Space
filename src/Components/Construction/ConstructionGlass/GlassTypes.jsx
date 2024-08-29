import React from "react";
import house from "./../../../Images/homeRed.png";

const GlassTypes = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Types of</span> Glass Partition in Bangalore{" "}
      </h2>
      <p>
        At Build Ur Space, we offer a variety of glass partition options to suit
        different needs and preferences. Here are some popular types of glass
        partitions available in Bangalore:
      </p>

      <li>
        <span>
          <img src={house} alt="house" /> Frameless Glass Partitions:
        </span>
        <p>
          For a modern and minimalist look, frameless glass partitions are an
          excellent choice. They create a seamless appearance and offer an
          unobstructed view, making them ideal for contemporary interiors.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Sliding Glass Partitions:{" "}
        </span>
        <p>
          Sliding glass partitions are a versatile solution for spaces that
          require flexibility. They can be opened or closed as needed, allowing
          you to adjust the layout of your room or office easily.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Frosted Glass Partitions:{" "}
        </span>
        <p>
          Frosted glass partitions provide privacy while still allowing light to
          pass through. This type of partition is perfect for areas where you
          need to separate spaces without completely blocking visibility.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Patterned Glass Partitions:{" "}
        </span>
        <p>
          For a more decorative touch, patterned glass partitions add visual
          interest to your space. They come in various designs and can be
          customized to match your interior decor.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Tempered Glass Partitions:{" "}
        </span>
        <p>
          Safety is a priority with tempered glass partitions. This type of
          glass is heat-treated to enhance its strength and durability, making
          it a reliable choice for high-traffic areas.
        </p>
      </li>
    </div>
  );
};

export default GlassTypes;
