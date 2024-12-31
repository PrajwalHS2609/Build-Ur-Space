import React from "react";
import house from "./../../../Images/homeRed.png";
import "./../LocationStyle.css";

const MSPalyaService = () => {
  return (
    <div className="locationHeadContainer">
      <h2>
        <span>Services</span> Offered by House Construction Companies in MS
        Palya{" "}
      </h2>
      <p>
        A reliable house construction company in MS Palya offers a wide range of
        services to cater to every aspect of your home-building journey. These
        include:
      </p>
      <ul>
        <h4>1. Planning and Design</h4>{" "}
        <li>
          <span>
            <img src={house} alt="house" /> Skilled engineers and construction
            crews ensure the foundation and framework are solid and durable.
          </span>
        </li>
        <li>
          <span>
            <img src={house} alt="house" /> Use of high-quality materials to
            guarantee the structural integrity of your home.
          </span>
        </li>
      </ul>
      <ul>
        <h4>2. Structural Construction</h4>{" "}
        <li>
          <span>
            <img src={house} alt="house" />
            Skilled engineers and construction crews ensure the foundation and
            framework are solid and durable.
          </span>
        </li>
        <li>
          <span>
            <img src={house} alt="house" />
            Use of high-quality materials to guarantee the structural integrity
            of your home.
          </span>
        </li>
      </ul>
      <ul>
        <h4>3. Interior Design and Finishing</h4>{" "}
        <li>
          <span>
            <img src={house} alt="house" /> Customized interiors that reflect
            your style, including flooring, wall finishes, and cabinetry.
          </span>
        </li>
        <li>
          <span>
            <img src={house} alt="house" /> Incorporation of smart home
            technology for enhanced convenience and functionality.
          </span>
        </li>
      </ul>

      <ul>
        <h4>4. Landscaping and Outdoor Spaces</h4>{" "}
        <li>
          <span>
            <img src={house} alt="house" /> Design and execution of gardens,
            patios, and outdoor living areas to complement your home.
          </span>
        </li>
        <li>
          <span>
            <img src={house} alt="house" /> Focus on sustainable practices such
            as rainwater harvesting and energy-efficient lighting.
          </span>
        </li>
      </ul>
      <ul>
        <h4>5. Project Management</h4>{" "}
        <li>
          <span>
            <img src={house} alt="house" /> End-to-end project management
            ensures timely delivery and adherence to budget.
          </span>
        </li>
        <li>
          <span>
            <img src={house} alt="house" /> Regular progress updates and quality
            checks to maintain transparency.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default MSPalyaService;
