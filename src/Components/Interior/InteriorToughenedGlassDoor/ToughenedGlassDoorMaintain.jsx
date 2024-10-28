import React from "react";
import point from "./../../../Images/point.png";

const ToughenedGlassDoorMaintain = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        Maintenance Tips for <span>Toughened Glass Doors</span>{" "}
      </h2>
      <p>
        To keep your toughened glass door in Bangalore looking pristine, follow
        these simple maintenance tips:
      </p>
      <li>
        <span>
          <img src={point} alt="point" />
          Regular Cleaning:{" "}
        </span>
        <p>
          Use a mild glass cleaner and soft cloth to remove dust and smudges.
          Regular cleaning prevents dirt buildup and maintains the glass’s
          shine.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Handle with Care:{" "}
        </span>
        <p>
          Though durable, avoid using harsh materials that might scratch the
          glass surface.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" /> Avoid Heavy Impacts:
        </span>
        <p>
          While toughened glass is resilient, it's best to avoid heavy impacts
          that might damage the frame or fittings.
        </p>
      </li>
      <li>
        <span>
          <img src={point} alt="point" />
          Check Fittings Periodically:{" "}
        </span>
        <p>
          Ensure that hinges, handles, and locks are in good condition to keep
          your toughened glass door in Bangalore secure and functioning
          smoothly.
        </p>
      </li>
    </div>
  );
};

export default ToughenedGlassDoorMaintain;
