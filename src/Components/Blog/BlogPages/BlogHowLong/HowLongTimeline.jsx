import React from "react";
import timeline from "./../../../../Images/How_Long_to_Build/timeline.png";
import WaterProofingImg from "../BlogWaterProofing/WaterProofingImg/WaterProofingImg";

const HowLongTimeline = () => {
  return (
    <div className="waterProofingHead">
      <WaterProofingImg img={timeline} alt="HowLongTimeline" />
      <h3>2. Typical Timeline for Building a 30x40 Feet House in Bangalore</h3>
      <p>
        Now that we’ve covered the various stages of construction, let’s look at
        an approximate timeline for building a 30x40 Feet House in Bangalore.
        Below is a breakdown of the time each phase typically takes:
      </p>
      <table>
        <tr>
          <th>Phase </th>
          <th>Estimated Time</th>
        </tr>
        <tr>
          <td>Design and Planning </td>
          <td>1 to 3 months</td>
        </tr>
        <tr>
          <td>Approvals and Permits </td>
          <td>1 to 2 months</td>
        </tr>
        <tr>
          <td>Soil Testing and Site Preparation </td>
          <td>1 to 2 weeks</td>
        </tr>
        <tr>
          <td>Foundation Work </td>
          <td>3 to 4 weeks</td>
        </tr>
        <tr>
          <td>Structure Construction</td>
          <td> 3 to 5 months</td>
        </tr>
        <tr>
          <td>Roofing and Waterproofing </td>
          <td>2 to 4 weeks</td>
        </tr>
        <tr>
          <td>Interior and Exterior Finishing </td>
          <td>2 to 3 months</td>
        </tr>
        <tr>
          <td>Landscaping and Final Inspection</td>
          <td> 2 to 3 weeks</td>
        </tr>
      </table>
      <p>
        <span>Total Estimated Time:</span> On average, it takes around 10 to 14
        months to build a 30x40 Feet House in Bangalore. However, this timeline
        can vary depending on factors such as labor availability, weather
        conditions, and material supply delays.
      </p>
      <br />
    </div>
  );
};

export default HowLongTimeline;
