import React from 'react'
import BlogCategories from '../../BlogCategories'
import WaterProofingHeader from '../BlogWaterProofing/WaterProofingHeader/WaterProofingHeader'
import BrickMasonryContent from './BrickMasonryContent'

const BlogBrickMasonry = () => {
  return (
    <div className="blogWaterProofing">
    <WaterProofingHeader />
    <div className="blogWrapper">
      <BrickMasonryContent />
      <BlogCategories />
    </div>
  </div>
  )
}

export default BlogBrickMasonry
