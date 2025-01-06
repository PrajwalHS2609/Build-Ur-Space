import React from 'react'
import "./WaterProofingImg.css"
const WaterProofingImg = (props) => {
  return (
    <div className='waterProofingImg'>
      <img src={props.img} alt={props.alt}  loading='lazy'/>
    </div>
  )
}

export default WaterProofingImg
