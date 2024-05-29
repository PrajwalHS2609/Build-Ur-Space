import React from 'react'
import "./Portfolio.css"
import PortfolioHead from './PortfolioHead'
import PortfolioPara from './PortfolioPara'
import PortfolioMain from './PortfolioMain'
const Portfolio = () => {
  return (
    <div className='portfolioContainer'>
      <PortfolioHead/>
      <PortfolioPara/>
      <PortfolioMain/>
    </div>
  )
}

export default Portfolio
