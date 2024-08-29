import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import "./Global.css";
import "./Fonts/futura/FUTURA45LIGHT.TTF";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Package from "./Components/PackagePage/Package";
// import PackageList from "./Components/PackagePage/PackageList";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import AboutUs from "./Components/AboutUs/AboutUs";
import Interior from "./Components/Interior/Interior";
import Construction from "./Components/Construction/Construction";
import Contacts from "./Components/Contacts/Contacts";
import CommercialInterior from "./Components/CommercialInterior/CommercialInterior";
// import PackageContext from "./Components/PackagePage/PackageContext";
import ConstructionArchitects from "./Components/Construction/ConstructionArchitects/ConstructionArchitects";
import ConstructionRental from "./Components/Construction/ConstructionRental/ConstructionRental";
import ConstructionPg from "./Components/Construction/ConstructionPg/ConstructionPg";
import ConstructionHotel from "./Components/Construction/ConstructionHotel/ConstructionHotel";
import ConstructionLowCost from "./Components/Construction/ConstructionLowCost/ConstructionLowCost";
import ConstructionShop from "./Components/Construction/ConstructionShop/ConstructionShop";
import ConstructionService from "./Components/Construction/ConstructionService/ConstructionService";
import ConstructionContractors from "./Components/Construction/ConstructionContractors/ConstructionContractors";
import ConstructionResidential from "./Components/Construction/ConstructionResidential/ConstructionResidential";
import ConstructionDuplex from "./Components/Construction/ConstructionDuplex/ConstructionDuplex";
import ConstructionBudget from "./Components/Construction/ConstructionBudget/ConstructionBudget";
import ConstructionGlass from "./Components/Construction/ConstructionGlass/ConstructionGlass";
import ConstructionFalse from "./Components/Construction/ConstructionFalse/ConstructionFalse";
import ConstructionShower from "./Components/Construction/ConstructionShower/ConstructionShower";
import ConstructionToughened from "./Components/Construction/ConstructionToughened/ConstructionToughened";
import ConstructionModular from "./Components/Construction/ConstructionModular/ConstructionModular";
import ConstructionCabinet from "./Components/Construction/ConstructionCabinet/ConstructionCabinet";
import ConstructionBed from "./Components/Construction/ConstructionBed/ConstructionBed";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ScrollTo />
        {/* <PackageContext> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/home-and-commercial-interior-design"
            element={<Interior />}
          />
          <Route
            path="/home-and-commercial-construction"
            element={<Construction />}
          />
          <Route path="/contact-us" element={<Contacts />} />
          <Route
            path="/commercial-interior-design"
            element={<CommercialInterior />}
          />
          <Route path="/home-construction-packages" element={<Package />} />
          <Route
            path="/architects-in-bangalore"
            element={<ConstructionArchitects />}
          />
          <Route
            path="/rental-house-construction-in-bangalore"
            element={<ConstructionRental />}
          />
          <Route
            path="/pg-construction-in-bangalore"
            element={<ConstructionPg />}
          />
          <Route
            path="/hotel-construction-in-bangalore"
            element={<ConstructionHotel />}
          />
          <Route
            path="/low-cost-house-construction-in-bangalore"
            element={<ConstructionLowCost />}
          />
          <Route
            path="/shop-construction-in-bangalore"
            element={<ConstructionShop />}
          />
          <Route
            path="/construction-service-in-bangalore"
            element={<ConstructionService />}
          />
          <Route
            path="/contractors-in-bangalore"
            element={<ConstructionContractors />}
          />
          <Route
            path="/residential-house-construction-in-bangalore"
            element={<ConstructionResidential />}
          />
          <Route
            path="/duplex-house-construction-in-bangalore"
            element={<ConstructionDuplex />}
          />
          <Route
            path="/budget-homes-construction-in-bangalore"
            element={<ConstructionBudget />}
          />
          <Route
            path="/glass-partition-in-bangalore-for-home-and-office"
            element={<ConstructionGlass />}
          />
          <Route
            path="/false-ceiling-in-bangalore-for-home-and-office"
            element={<ConstructionFalse />}
          />
          <Route
            path="/shower-partition-in-bangalore-for-home"
            element={<ConstructionShower />}
          />
          <Route
            path="/toughened-glass-skylight-in-bangalore-for-home"
            element={<ConstructionToughened />}
          />
          <Route
            path="/modular-wardrobes-in-bangalore-for-home"
            element={<ConstructionModular />}
          />
          <Route
            path="/modular-cabinets-in-bangalore-for-home"
            element={<ConstructionCabinet />}
          />
          <Route
            path="/modular-bed-in-bangalore-for-home"
            element={<ConstructionBed />}
          />
        </Routes>

        {/* </PackageContext> */}
      </BrowserRouter>
    </div>
  );
};

export default App;
