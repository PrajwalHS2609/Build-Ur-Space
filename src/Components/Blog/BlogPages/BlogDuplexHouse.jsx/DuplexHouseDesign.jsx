import React from "react";
import house from "./../../../../Images/homeRed.png";

const DuplexHouseDesign = () => {
  return (
    <div className="waterProofingWhy">
      <h5>Design Ideas for Duplex House Construction</h5>
      <p>
        Modern Duplex House Construction allows for creative designs that suit
        various lifestyles. Here are some ideas to inspire you:
      </p>
      <ul>
        <li>
          <span>
            <img src={house} alt="house" /> Contemporary Minimalism
          </span>
          <p>
            Opt for clean lines, neutral color palettes, and open spaces for a
            minimalist yet stylish look.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={house} alt="house" /> Eco-Friendly Homes
          </span>
          <p>
            Incorporate sustainable materials, solar panels, and
            energy-efficient appliances for an eco-conscious duplex.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={house} alt="house" />
            Luxury Living{" "}
          </span>
          <p>
            Add high-end features such as smart home technology, premium
            finishes, and private balconies for a luxurious touch.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={house} alt="house" />
            Integrated Outdoor Spaces{" "}
          </span>
          <p>
            Design balconies, terraces, or rooftop gardens to maximize outdoor
            living areas.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={house} alt="house" />
            Separate Entrances with Shared Utilities{" "}
          </span>
          <p>
            Maintain privacy while sharing utilities like water tanks or parking
            spaces for cost efficiency.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default DuplexHouseDesign;
