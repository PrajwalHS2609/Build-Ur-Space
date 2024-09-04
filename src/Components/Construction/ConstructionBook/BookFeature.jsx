import React from "react";
import house from "./../../../Images/homeRed.png";

const BookFeature = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Features of</span> Our Modular Book Shelves in Bangalore for Home{" "}
      </h2>
      <p>
        <a href="https://buildurspace.com/">Buildurspace</a> takes pride in
        offering a wide range of modular book shelves in Bangalore for home that
        come with various features to suit different preferences and needs:
      </p>

      <li>
        <span>
          <img src={house} alt="house" />
          Adjustable Shelving:
        </span>
        <p>
          Our modular book shelves in Bangalore for home come with adjustable
          shelving options, allowing you to customize the height and width
          according to your book sizes and storage requirements.
        </p>
      </li>

      <li>
        <span>
          <img src={house} alt="house" /> Sturdy Construction:
        </span>
        <p>
          Each of our modular book shelves in Bangalore for home is built to
          last. We use premium materials like engineered wood, solid wood, and
          metal to ensure that the shelves are sturdy, stable, and resistant to
          wear and tear.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Modern and Stylish Designs:{" "}
        </span>
        <p>
          Our modular book shelves in Bangalore for home are available in a
          variety of designs, from minimalist modern styles to classic, rustic
          finishes. Choose a style that complements your interior decor and adds
          a touch of sophistication to your home.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          asy Assembly and Reconfiguration:{" "}
        </span>
        <p>
          One of the main advantages of our modular book shelves in Bangalore
          for home is their ease of assembly. You can easily put them together
          or reconfigure them as needed, making them ideal for people who move
          frequently or like to change their home layout.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Eco-Friendly Materials:{" "}
        </span>
        <p>
          We are committed to sustainability, and our modular book shelves in
          Bangalore for home are made from eco-friendly materials that are both
          durable and environmentally responsible.
        </p>
      </li>
    </div>
  );
};

export default BookFeature;
