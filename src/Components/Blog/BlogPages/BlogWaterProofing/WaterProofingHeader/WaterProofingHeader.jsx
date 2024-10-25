import React from 'react'
import "./WaterProofingHeader.css"
const WaterProofingHeader = (props) => {
  return (
    <div className='waterProofingHeader'>
      <h2>{props.head}</h2>
    </div>
  )
}

export default WaterProofingHeader
