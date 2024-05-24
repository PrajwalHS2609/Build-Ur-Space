import React from 'react'
import OurGoalList from './OurGoalList'
import OurGoalImg from './OurGoalImg'
import "./OurGoals.css"

const OurGoals = () => {
  return (
    <div className="ourGoalContainer">
    <div className="ourGoalContent1">
      <OurGoalImg/>
    </div>
    <div className="ourGoalContent2">
      <OurGoalList/>
    </div>
  </div>
  )
}

export default OurGoals
