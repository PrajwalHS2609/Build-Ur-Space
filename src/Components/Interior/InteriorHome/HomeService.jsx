import React from "react";
import house from "./../../../Images/homeRed.png";

const HomeService = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Our Services</span> for Home Interiors in Bangalore{" "}
      </h2>
      <p>
        <a href="https://buildurspace.com/">Buildurspace</a> provides a wide
        range of services to cater to all your interior design needs. Our
        expertise in home interiors in Bangalore includes:
      </p>

      <li>
        <span>
          <img src={house} alt="house" />
          Living Room Design:
        </span>
        <p>
          The living room is the heart of your home, where you entertain guests
          and spend quality time with family. We design living spaces that are
          comfortable, stylish, and functional, using a mix of furniture,
          textures, and colors to create the perfect ambiance.
        </p>
      </li>

      <li>
        <span>
          <img src={house} alt="house" /> Bedroom Interiors:
        </span>
        <p>
          Your bedroom should be a serene sanctuary where you can relax and
          recharge. Our home interiors in Bangalore service includes designing
          bedrooms that are cozy and luxurious, with the right combination of
          furnishings, lighting, and decor.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Kitchen Design:{" "}
        </span>
        <p>
          The kitchen is the hub of the home, and its design should reflect both
          style and functionality. Our team specializes in modular kitchen
          designs that maximize space and efficiency while maintaining a chic,
          modern look.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Dining Room Interiors:{" "}
        </span>
        <p>
          We create dining rooms that are inviting and stylish, perfect for
          hosting dinners and gatherings. With a focus on comfort and elegance,
          our{" "}
          <a href="https://buildurspace.com/home-interiors-in-bangalore">
            {" "}
            home interiors in Bangalore
          </a>{" "}
          ensure that your dining space is a true reflection of your personal
          taste.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Bathroom Design:{" "}
        </span>
        <p>
          We transform ordinary bathrooms into spa-like retreats with our
          innovative and stylish designs. Our{" "}
          <a href="https://buildurspace.com/home-interiors-in-bangalore">
            home interiors in Bangalore
          </a>{" "}
          for bathrooms include space-saving solutions, luxurious fittings, and
          modern fixtures.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Children’s Room Interiors:{" "}
        </span>
        <p>
          Designing a child’s room requires creativity and practicality. Our
          home interiors in Bangalore for kids' rooms are playful, colorful, and
          designed to grow with your child.
        </p>
      </li>
    </div>
  );
};

export default HomeService;
