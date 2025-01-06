import React from "react";
import point from "./../../../../Images/point.png";

const InteriorPaintTips = () => {
  return (
    <div className="waterProofingWhy">
      <h5>Expert Tips for Painting Your Home Interior</h5>
      <p>
        Once you've chosen your ideal home interior paint colors, it’s time to
        bring your vision to life. Follow these expert tips for a flawless
        finish:
      </p>
      <ul>
        <h4>1. Prepare Your Space</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Clean the walls to remove dirt and
            grease.
          </span>
          <span>
            <img src={point} alt="point" /> Fill any holes or cracks with
            spackle.
          </span>
          <span>
            <img src={point} alt="point" /> Sand the surfaces to ensure
            smoothness.
          </span>
        </li>
      </ul>
      <ul>
        <h4>2. Choose High-Quality Paint</h4>
        <p>
          Investing in high-quality paint can save time and effort. Premium
          paints provide better coverage and durability, ensuring your walls
          look fresh for years.
        </p>
      </ul>
      <ul>
        <h4>3. Don’t Skimp on Primer</h4>
        <p>
          Primer helps the paint adhere better and provides an even base,
          especially if you’re transitioning from a dark color to a lighter one.
        </p>
      </ul>
      <ul>
        <h4>4. Use the Right Tools</h4>
        <p>
          For a professional finish, use high-quality brushes, rollers, and
          painter's tape. The right tools make a significant difference in the
          outcome.
        </p>
      </ul>
      <ul>
        <h4>5. Apply Multiple Coats</h4>
        <p>
          For vibrant and consistent color, apply at least two coats of paint.
          Allow sufficient drying time between coats to avoid streaks.
        </p>
      </ul>
      <ul>
        <h4>6. Focus on Finishing Touches</h4>
        <li>
          <span>
            <img src={point} alt="point" /> Remove tape carefully to avoid
            peeling.
          </span>
          <span>
            <img src={point} alt="point" /> Touch up any missed spots or uneven
            areas.
          </span>
          <span>
            <img src={point} alt="point" /> Clean up paint splatters
            immediately.
          </span>
        </li>
      </ul>
    </div>
  );
};

export default InteriorPaintTips;
