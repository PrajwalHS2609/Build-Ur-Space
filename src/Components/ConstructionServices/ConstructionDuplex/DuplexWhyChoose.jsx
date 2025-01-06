import React from "react";
import check from "./../../../Images/check.png";

const DuplexWhyChoose = () => {
  return (
    <div className="constructionHeadContainer">
      <h2>
        <span>Why Choose</span> a Duplex House?
      </h2>
      <p>
        Duplex house construction in Bangalore has become increasingly popular
        for several reasons:
      </p>
      <li>
        <span>
          <img src={check} alt="check" />
          Maximized Space Utilization:{" "}
        </span>
        <p>
          In a city like Bangalore, where space is a premium, duplex houses
          offer an innovative way to maximize the available area. By
          constructing two separate living units within the same building, you
          can effectively utilize the plot space.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Rental Income Potential:{" "}
        </span>
        <p>
          One of the major advantages of duplex house construction in Bangalore
          is the potential for generating rental income. You can live in one
          unit and rent out the other, providing you with an additional source
          of income while living comfortably in your own home.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Shared Family Living:{" "}
        </span>
        <p>
          Duplex houses are ideal for families who want to live close to each
          other while maintaining privacy. Duplex house construction in
          Bangalore allows for separate living spaces under one roof, making it
          perfect for joint families or those who want to keep aging parents
          nearby.
        </p>
      </li>
      <li>
        <span>
          <img src={check} alt="check" />
          Future-Proof Investment:{" "}
        </span>
        <p>
          Real estate in Bangalore continues to be a lucrative investment.
          Duplex house construction in Bangalore not only increases the value of
          your property but also offers flexibility for future changes, such as
          converting the duplex into a single-family home or selling one unit
          while retaining the other.
        </p>
      </li>
    </div>
  );
};

export default DuplexWhyChoose;
