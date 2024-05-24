import React from 'react'
import "./OurGoals.css"
import goal from  "./../../../Images/3d-rendering-arrow-hitting-target.jpg"
const OurGoalImg = () => {
  return (
    <div className="ourGoalImgContainer">
    <img
      src={goal}
      alt=""
    />
  </div>
  )
}

export default OurGoalImg
