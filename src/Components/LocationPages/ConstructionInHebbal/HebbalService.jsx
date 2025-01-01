import React from "react";
import house from "./../../../Images/homeRed.png";

const HebbalService = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        <span>Our Services</span> as a House Construction Company in Hebbal{" "}
      </h2>
      <p>
        As a comprehensive house construction company in Hebbal, Build Ur Space
        offers a wide range of services to meet all your construction needs.
        Here’s what we provide:
      </p>

      <li>
        <span>
          <img src={house} alt="house" />
          Architectural Design and Planning{" "}
        </span>
        <p>
          Every great home begins with a great design. Our in-house architects
          work closely with you to create a design that aligns with your vision
          and maximizes the use of space. As a leading{" "}
          <a href="https://buildurspace.com/duplex-house-construction-in-bangalore">
            house construction company in Hebbal,{" "}
          </a>
          , we ensure that our designs are not only aesthetically pleasing but
          also practical and sustainable.
        </p>
      </li>

      <li>
        <span>
          <img src={house} alt="house" />
          Project Management{" "}
        </span>
        <p>
          Managing a construction project requires a blend of expertise,
          attention to detail, and effective communication. At Build Ur Space,
          our project managers oversee every aspect of the construction process,
          ensuring that your project is completed on time, within budget, and to
          the highest standards of quality.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Construction and Development{" "}
        </span>
        <p>
          As a full-service house construction company in Hebbal, we handle
          every phase of construction, from foundation to finishing. Our skilled
          craftsmen and construction professionals use the latest techniques and
          materials to build homes that are durable, energy-efficient, and
          beautiful.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Interior Design and Finishing{" "}
        </span>
        <p>
          The interior of your home should be as inviting and functional as the
          exterior. As a dedicated{" "}
          <a href="https://buildurspace.com/residential-house-construction-in-bangalore">
            house construction company in Hebbal
          </a>
          , we offer interior design and finishing services that include
          flooring, painting, cabinetry, lighting, and more. Our team works with
          you to create spaces that are comfortable, stylish, and reflective of
          your taste.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Renovation and Remodeling{" "}
        </span>
        <p>
          Looking to update or expand your existing home? As a versatile house
          construction company in Hebbal, we offer renovation and remodeling
          services that breathe new life into your space. Whether it’s a kitchen
          makeover, a bathroom renovation, or a complete home transformation, we
          have the expertise to deliver exceptional results.
        </p>
      </li>
    </div>
  );
};

export default HebbalService;
