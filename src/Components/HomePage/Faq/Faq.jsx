import React from 'react'
import "./Faq.css"
import FaqHeader from './FaqHeader';
import FaqMain from './FaqMain';
const Faq = () => {
  return (
    <div className='faqContainer'>
      <FaqHeader />
      <FaqMain/>
    </div>
  )
}

export default Faq
