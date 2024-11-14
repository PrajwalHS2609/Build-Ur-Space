import React from 'react'
import WaterProofingImg from '../BlogWaterProofing/WaterProofingImg/WaterProofingImg'
import windowAndDoorBanner from "./../../../../Images/BlogImgs/Trending Window and Door/Banner.png"
import SlidingGlassDoors from './SlidingGlassDoors';
import FrenchDoors from './FrenchDoors';
import FloortoCeilingWindows from './FloorToCeilingWindows';
import BiFoldDoors from './BiFoldDoors';
import CasementWindows from './CasementWindows';
import AwningWindows from './AwningWindows';
import PivotDoors from './PivotDoors';
import FixedWindows from './FixedWindows';
import SmartWindows from './SmartWindows';
import Skylights from './Skylights';
import DoubleTripleGlazedWindows from './DoubleTripleGlazedWindows';
import CustomDoors from './CustomDoors';
import BlogWindowAndDoorHead from './BlogWindowAndDoorHead';

const WindowAndDoorContent = () => {
  return (
    <div className="blogContent">
    <WaterProofingImg
      img={windowAndDoorBanner}
      alt="windowAndDoorBanner"
    />
    <BlogWindowAndDoorHead/>
    <SlidingGlassDoors/>
    <FrenchDoors/>
    <FloortoCeilingWindows/>
    <BiFoldDoors/>
    <CasementWindows/>
    <AwningWindows/>
    <PivotDoors/>
    <FixedWindows/>
    <SmartWindows/>
    <Skylights/>
    <DoubleTripleGlazedWindows/>
    <CustomDoors/>
  </div>
  )
}

export default WindowAndDoorContent
