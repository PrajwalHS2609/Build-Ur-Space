import React from "react";
import house from "./../../../Images/homeRed.png";

const DryWallApplication = () => {
  return (
    <div className="architectsHeadContainer">
      <h2>
        Ideal Applications for <span> Dry Wall Partitions</span>{" "}
      </h2>
      <li>
        <span>
          <img src={house} alt="house" />
          Residential Spaces{" "}
        </span>
        <p>
          In residential settings, dry wall partitions in Bangalore can be used
          to create additional rooms, such as a home office, guest room, or play
          area. They provide the flexibility to adapt to changing family needs
          without the expense of major renovations.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Commercial Offices{" "}
        </span>
        <p>
          For businesses, dry wall partitions are perfect for creating separate
          offices, meeting rooms, and collaborative workspaces. They allow for
          easy reconfiguration as team sizes and functions change over time.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Educational Institutions{" "}
        </span>
        <p>
          Schools and universities can utilize dry wall partitions in Bangalore
          to create classrooms, labs, and administrative offices, promoting an
          organized and functional learning environment.
        </p>
      </li>
      <li>
        <span>
          <img src={house} alt="house" />
          Healthcare Facilities{" "}
        </span>
        <p>
          In hospitals and clinics, dry wall partitions can help design patient
          rooms, consultation areas, and waiting rooms, ensuring patient comfort
          and confidentiality.
        </p>
      </li>
    </div>
  );
};

export default DryWallApplication;
