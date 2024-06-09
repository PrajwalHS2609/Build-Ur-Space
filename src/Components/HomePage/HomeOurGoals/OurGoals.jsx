import React from 'react'
import OurGoalList from './OurGoalList'
import "./OurGoals.css"
import HomeOur1 from '../HomeOur/HomeOur1'
import goal from "./../../../Images/3d-rendering-arrow-hitting-target.jpg"
import OurGoalHead from './OurGoalHead'
import OurGoalsMain from './OurGoalsMain'

const OurGoals = () => {
  return (
<div className='ourGoalContainer'>
  <OurGoalHead/>
  <OurGoalsMain/>
</div>
  )
}

export default OurGoals
