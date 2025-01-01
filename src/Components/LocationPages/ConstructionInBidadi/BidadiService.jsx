import React from "react";
import house from "./../../../Images/homeRed.png";

const BidadiService = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        Comprehensive Services Provided by <span>Build Ur Space</span>: Your
        Trusted House Construction Company in Bidadi{" "}
      </h2>
      <p>
        At Build Ur Space, we offer a wide range of services designed to
        simplify the home-building process. Our services cover every stage of
        construction, from initial planning to final handover, making us the
        go-to House Construction Company in Bidadi. Here’s a look at our
        comprehensive offerings:
      </p>

      <li>
        <span>
          <img src={house} alt="house" />
          Customized Home Design:{" "}
        </span>
        <p>
          We believe that every home should reflect the lifestyle and
          preferences of its owner. Our architects work closely with you to
          create a personalized design that matches your vision.
        </p>
      </li>

      <li>
        <span>
          <img src={house} alt="house" /> Detailed Planning:
        </span>
        <p>
          Build Ur Space, as a premier House Construction Company in Bidadi,
          emphasizes careful planning to ensure a seamless construction process.
          We handle all logistics, permits, and approvals, so you can focus on
          the excitement of your new home.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Quality Construction:{" "}
        </span>
        <p>
          From foundation to finishing touches, our construction team is
          committed to delivering the highest quality. Using durable,
          sustainable materials, we create homes that stand the test of time.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Project Management:{" "}
        </span>
        <p>
          Our dedicated project managers ensure that every phase of your
          construction is handled efficiently. As a trusted House Construction
          Company in Bidadi, we guarantee transparency, providing regular
          updates and maintaining open communication throughout the project.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Post-Construction Support:{" "}
        </span>
        <p>
          Our support doesn’t end with the completion of construction. Build Ur
          Space offers post-construction services to address any maintenance
          needs, ensuring your home remains as beautiful as the day you move in.
        </p>
      </li>
    </div>
  );
};

export default BidadiService;
