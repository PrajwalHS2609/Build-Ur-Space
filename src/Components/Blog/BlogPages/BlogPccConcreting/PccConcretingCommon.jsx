import React from "react";
import point from "./../../../../Images/point.png";

const PccConcretingCommon = () => {
  return (
    <div className="waterProofingWhy">
      <h5>Common Mistakes to Avoid in PCC Concreting</h5>
      <ul>
        <li>
          <span>
            <img src={point} alt="point" /> Incorrect Mix Proportions:
          </span>
          <p>
            Using the wrong ratio of materials can compromise the strength of
            the concrete.
          </p>{" "}
        </li>
        <li>
          {" "}
          <span>
            <img src={point} alt="point" /> Inadequate Compaction:
          </span>
          <p>
            Failing to compact the concrete properly can result in voids and
            weak spots.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Poor Curing:{" "}
          </span>
          <p>
            Insufficient curing can lead to cracking and reduced durability.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Ignoring Surface Preparation:{" "}
          </span>
          <p>
            A poorly prepared site can cause uneven settling and structural
            issues.
          </p>{" "}
        </li>

        <li>
          {" "}
          <span>
            <img src={point} alt="point" />
            Rushing the Process:{" "}
          </span>
          <p>
            Allow enough time for each step, from mixing to curing, to ensure
            optimal results.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default PccConcretingCommon;
