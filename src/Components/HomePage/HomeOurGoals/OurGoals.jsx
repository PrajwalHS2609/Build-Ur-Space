import React from 'react'
import OurGoalList from './OurGoalList'
import "./OurGoals.css"
import HomeOur1 from '../HomeOur/HomeOur1'
import goal from "./../../../Images/3d-rendering-arrow-hitting-target.jpg"

const OurGoals = () => {
  return (
<>
<HomeOur1
  h1="OUR"
  h2="GOALS"
  txt={<OurGoalList/>}
  img={goal}
/>
</>
  )
}

export default OurGoals
