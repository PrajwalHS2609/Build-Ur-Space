import React from "react";
import "./WhereToFind.css";
import WhereToFindCard from "./WhereToFindCard";
const WhereToFind = () => {
  return (
    <div className="whereContainer">
      <div className="whereHead">
        <h1>
          WHERE TO <span>FIND US</span>
        </h1>
      </div>
      <div className="whereMapContainer">
        <WhereToFindCard
          map={
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3851.127243886911!2d76.88822907511697!3d15.151355085402976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTXCsDA5JzA0LjkiTiA3NsKwNTMnMjYuOSJF!5e0!3m2!1sen!2sin!4v1717437126876!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          }
          head="Bellary location"
          para="#9, block H, v nagappa colony,
          hospet road, cantonment, Bellary, karnataka - 583104"
        />

        <WhereToFindCard
          map={
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3870.577872904946!2d76.17915727509565!3d14.043018286379892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTTCsDAyJzM0LjkiTiA3NsKwMTAnNTQuMiJF!5e0!3m2!1sen!2sin!4v1717562546895!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          }
          head="Chitradurga location"
          para="Opposite to government hospital beside Canara bank  Holalkere Chitradurga 577526"
        />
        <WhereToFindCard
          map={
            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m20!1m8!1m3!1d971.746647858311!2d77.57402981955079!3d13.036525349205304!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d13.036507799999999!2d77.57465479999999!4m3!3m2!1d13.0365206!2d77.5746918!5e0!3m2!1sen!2sin!4v1717562650878!5m2!1sen!2sin"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          }
          head="Bengaluru location"
          para="#25, 1st floor, 4th cross, Trupthi complex, above Poorvika mobiles, Sanjay Nagar main road, Bengaluru - 94"
        />
      </div>
    </div>
  );
};

export default WhereToFind;
