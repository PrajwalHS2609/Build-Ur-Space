import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import "./Global.css";
import "./Fonts/futura/FUTURA45LIGHT.TTF";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import InteriorHome from "./Components/Interior/InteriorHome/InteriorHome";
import InteriorCommercial from "./Components/Interior/InteriorCommercial/InteriorCommercial";
import InteriorRestaurant from "./Components/Interior/InteriorRestaurant/InteriorRestaurant";
import InteriorSalon from "./Components/Interior/InteriorSalon/InteriorSalon";
import InteriorHospital from "./Components/Interior/InteriorHospital/InteriorHospital";
import InteriorKindergarten from "./Components/Interior/InteriorKindergarten/InteriorKindergarten";
import InteriorResort from "./Components/Interior/InteriorResort/InteriorResort";
import InteriorJewellery from "./Components/Interior/InteriorJewellery/InteriorJewellery";
import InteriorRetailStore from "./Components/Interior/InteriorRetailStore/InteriorRetailStore";
import ConstructionInKrPuram from "./Components/Construction/ConstructionInKrPuram/ConstructionInKrPuram";
import ConstructionInHoskote from "./Components/Construction/ConstructionInHoskote/ConstructionInHoskote";
import ConstructionInSarjapura from "./Components/Construction/ConstructionInSarjapura/ConstructionInSarjapura";
import ConstructionInKanakapura from "./Components/Construction/ConstructionInKanakapura/ConstructionInKanakapura";
import ConstructionInBanaswadi from "./Components/Construction/ConstructionInBanaswadi/ConstructionInBanaswadi";
import ConstructionInHebbal from "./Components/Construction/ConstructionInHebbal/ConstructionInHebbal";
import ConstructionInDevanahalli from "./Components/Construction/ConstructionInDevanahalli/ConstructionInDevanahalli";
import InteriorBed from "./Components/Interior/InteriorBed/InteriorBed";
import InteriorBook from "./Components/Interior/InteriorBook/InteriorBook";
import InteriorStudy from "./Components/Interior/InteriorStudy/InteriorStudy";
import InteriorShower from "./Components/Interior/InteriorShower/InteriorShower";
import InteriorFalse from "./Components/Interior/InteriorFalse/InteriorFalse";
import InteriorModular from "./Components/Interior/InteriorModular/InteriorModular";
import InteriorGlass from "./Components/Interior/InteriorGlass/InteriorGlass";
import InteriorPuja from "./Components/Interior/InteriorPuja/InteriorPuja";
import InteriorToughened from "./Components/Interior/InteriorToughened/InteriorToughened";
import InteriorCabinet from "./Components/Interior/InteriorCabinet/InteriorCabinet";
import ConstructionInRajankunte from "./Components/Construction/ConstructionInRajankunte/ConstructionInRajankunte";
import ConstructionInHesaraghatta from "./Components/Construction/ConstructionInHesaraghatta/ConstructionInHesaraghatta";
import ConstructionInChikkabanavara from "./Components/Construction/ConstructionInChikkabanavara/ConstructionInChikkabanavara";
import ConstructionInNelamangala from "./Components/Construction/ConstructionInNelamangala/ConstructionInNelamangala";
import Blog from "./Components/Blog/Blog";
import BlogWaterProofing from "./Components/Blog/BlogPages/BlogWaterProofing/BlogWaterProofing";
import BlogBrickMasonry from "./Components/Blog/BlogPages/BlogBrickMasonry/BlogBrickMasonry";
import BlogHowLong from "./Components/Blog/BlogPages/BlogHowLong/BlogHowLong";
import InteriorGypsumCeling from "./Components/Interior/InteriorGypsumCeling/InteriorGypsumCeling";
import InteriorGypsumPartition from "./Components/Interior/InteriorGypsumPartition/InteriorGypsumPartition";
import InteriorDryWall from "./Components/Interior/InteriorDryWall/InteriorDryWall";
import InteriorGridCeiling from "./Components/Interior/InteriorGridCeiling/InteriorGridCeiling";
import InteriorPvcCeiling from "./Components/Interior/InteriorPvcCeiling/InteriorPvcCeiling";
import InteriorWoodenCeiling from "./Components/Interior/InteriorWoodenCeiling/InteriorWoodenCeiling";
import InteriorToughenedGlassPartition from "./Components/Interior/InteriorToughenedGlassPartition/InteriorToughenedGlassPartition";
import InteriorToughenedGlassDoor from "./Components/Interior/InteriorToughenedGlassDoor/InteriorToughenedGlassDoor";
import WhatsApp from "./Components/HomePage/WhatsApp/WhatsApp";
import Footer from "./Components/Footer/Footer";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ScrollTo />
        {/* <PackageContext> */}
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
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
            path="/house-construction-company-in-kr-puram"
            element={<ConstructionInKrPuram />}
          />
          <Route
            path="/house-construction-company-in-hoskote-road"
            element={<ConstructionInHoskote />}
          />
          <Route
            path="/house-construction-company-in-sarjapura"
            element={<ConstructionInSarjapura />}
          />
          <Route
            path="/house-construction-company-in-kanakapura-road"
            element={<ConstructionInKanakapura />}
          />
          <Route
            path="/house-construction-company-in-banaswadi"
            element={<ConstructionInBanaswadi />}
          />
          <Route
            path="/house-construction-company-in-hebbal"
            element={<ConstructionInHebbal />}
          />
          <Route
            path="/house-construction-company-in-devanahalli"
            element={<ConstructionInDevanahalli />}
          />
          <Route
            path="/house-construction-company-in-rajankunte"
            element={<ConstructionInRajankunte />}
          />
          <Route
            path="/house-construction-company-in-hesaraghatta"
            element={<ConstructionInHesaraghatta />}
          />
          <Route
            path="/house-construction-company-in-chikkabanavara"
            element={<ConstructionInChikkabanavara />}
          />
          <Route
            path="/house-construction-company-in-nelamangala"
            element={<ConstructionInNelamangala />}
          />
          {/* ----------------------Interior-------------------------- */}
          <Route
            path="/glass-partition-in-bangalore-for-home-and-office"
            element={<InteriorGlass />}
          />
          <Route
            path="/false-ceiling-in-bangalore-for-home-and-office"
            element={<InteriorFalse />}
          />
          <Route
            path="/shower-partition-in-bangalore-for-home"
            element={<InteriorShower />}
          />
          <Route
            path="/toughened-glass-skylight-in-bangalore-for-home"
            element={<InteriorToughened />}
          />
          <Route
            path="/modular-wardrobes-in-bangalore-for-home"
            element={<InteriorModular />}
          />
          <Route
            path="/modular-cabinets-in-bangalore-for-home"
            element={<InteriorCabinet />}
          />
          <Route
            path="/modular-bed-in-bangalore-for-home"
            element={<InteriorBed />}
          />
          <Route
            path="/modular-study-table-in-bangalore-for-home"
            element={<InteriorStudy />}
          />
          <Route
            path="/modular-book-shelves-in-bangalore-for-home"
            element={<InteriorBook />}
          />
          <Route
            path="/modular-puja-unit-in-bangalore-for-home"
            element={<InteriorPuja />}
          />
          <Route
            path="/home-interiors-in-bangalore"
            element={<InteriorHome />}
          />
          <Route
            path="/commercial-office-interiors-in-bangalore"
            element={<InteriorCommercial />}
          />
          <Route
            path="/restaurant-interiors-in-bangalore"
            element={<InteriorRestaurant />}
          />
          <Route
            path="/salon-interior-designers-in-bangalore"
            element={<InteriorSalon />}
          />
          <Route
            path="/hospital-and-clinic-interior-designers-in-bangalore"
            element={<InteriorHospital />}
          />
          <Route
            path="/kindergarten-interiors-designers-in-bangalore"
            element={<InteriorKindergarten />}
          />
          <Route
            path="/resort-interior-designers-in-bangalore"
            element={<InteriorResort />}
          />
          <Route
            path="/jewellery-shop-interior-designers-in-bangalore"
            element={<InteriorJewellery />}
          />
          <Route
            path="/retail-store-interiors-in-bangalore"
            element={<InteriorRetailStore />}
          />
          <Route
            path="/gypsum-ceilings-in-bangalore"
            element={<InteriorGypsumCeling />}
          />
          <Route
            path="/gypsum-partition-in-bangalore"
            element={<InteriorGypsumPartition />}
          />
          <Route
            path="/grid-false-ceiling-in-bangalore"
            element={<InteriorGridCeiling />}
          />
          <Route
            path="/dry-wall-partition-in-bangalore"
            element={<InteriorDryWall />}
          />
          <Route
            path="/pvc-false-ceiling-in-bangalore"
            element={<InteriorPvcCeiling />}
          />
          <Route
            path="/wooden-false-ceiling-in-bangalore"
            element={<InteriorWoodenCeiling />}
          />
          <Route
            path="/toughened-glass-door-in-bangalore"
            element={<InteriorToughenedGlassDoor />}
          />{" "}
          <Route
            path="/toughened-glass-partition-in-bangalore"
            element={<InteriorToughenedGlassPartition />}
          />
          {/* ---------------------Blog---------------------------- */}
          <Route path="/blog" element={<Blog />} />
          {/* <Route path="/blog/" element={<Navigate to="/blog" replace />} /> */}
          <Route
            path="/top-waterproofing-materials-worth-investing-in-for-your-new-home"
            element={<BlogWaterProofing />}
          />
          <Route
            path="/current-types-of-brick-masonry-in-use-today"
            element={<BlogBrickMasonry />}
          />
          <Route
            path="/how-long-to-build-a-30x40-feet-house-in-bangalore"
            element={<BlogHowLong />}
          />
        </Routes>
        {/* </PackageContext> */}
        <WhatsApp />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
