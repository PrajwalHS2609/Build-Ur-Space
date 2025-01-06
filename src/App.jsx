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
import Blog from "./Components/Blog/Blog";
import BlogWaterProofing from "./Components/Blog/BlogPages/BlogWaterProofing/BlogWaterProofing";
import BlogBrickMasonry from "./Components/Blog/BlogPages/BlogBrickMasonry/BlogBrickMasonry";
import BlogHowLong from "./Components/Blog/BlogPages/BlogHowLong/BlogHowLong";
import WhatsApp from "./Components/HomePage/WhatsApp/WhatsApp";
import Footer from "./Components/Footer/Footer";
import BlogWindowAndDoor from "./Components/Blog/BlogPages/BlogWindowAndDoor/BlogWindowAndDoor";
import BlogEssentialVastu from "./Components/Blog/BlogPages/BlogEssentialVastu/BlogEssentialVastu";
import CategoryDoorsAndWindows from "./Components/Blog/BlogCategory/CategoryDoorsAndWindows/CategoryDoorsAndWindows";
import BlogKitchenHallDesign from "./Components/Blog/BlogPages/BlogKitchenHallDesign/BlogKitchenHallDesign";
import BlogFalseCeiling from "./Components/Blog/BlogPages/BlogFalseCeiling/BlogFalseCeiling";
import CategoryFalseCeiling from "./Components/Blog/BlogCategory/CategoryFalseCeiling/CategoryFalseCeiling";
import CategoryConstruction from "./Components/Blog/BlogCategory/CategoryConstruction/CategoryConstruction";
import BlogPccConcreting from "./Components/Blog/BlogPages/BlogPccConcreting/BlogPccConcreting";
import ConstructionInMSPalya from "./Components/LocationPages/ConstructionInMSPalya/ConstructionInMSPalya";
import ConstructionInVidyaranyapura from "./Components/LocationPages/ConstructionInVidyaranyapura/ConstructionInVidyaranyapura";
import ConstructionInBagaluru from "./Components/LocationPages/ConstructionInBagaluru/ConstructionInBagaluru";
import ConstructionInHoskote from "./Components/LocationPages/ConstructionInHoskote/ConstructionInHoskote";
import ConstructionInKrPuram from "./Components/LocationPages/ConstructionInKrPuram/ConstructionInKrPuram";
import ConstructionInSarjapura from "./Components/LocationPages/ConstructionInSarjapura/ConstructionInSarjapura";
import ConstructionInKanakapura from "./Components/LocationPages/ConstructionInKanakapura/ConstructionInKanakapura";
import ConstructionInBanaswadi from "./Components/LocationPages/ConstructionInBanaswadi/ConstructionInBanaswadi";
import ConstructionInHebbal from "./Components/LocationPages/ConstructionInHebbal/ConstructionInHebbal";
import ConstructionInDevanahalli from "./Components/LocationPages/ConstructionInDevanahalli/ConstructionInDevanahalli";
import ConstructionInRajankunte from "./Components/LocationPages/ConstructionInRajankunte/ConstructionInRajankunte";
import ConstructionInHesaraghatta from "./Components/LocationPages/ConstructionInHesaraghatta/ConstructionInHesaraghatta";
import ConstructionInNelamangala from "./Components/LocationPages/ConstructionInNelamangala/ConstructionInNelamangala";
import ConstructionInChikkabanavara from "./Components/LocationPages/ConstructionInChikkabanavara/ConstructionInChikkabanavara";
import ConstructionInMadanaykanahalli from "./Components/LocationPages/ConstructionInMadanaykanahalli/ConstructionInMadanaykanahalli";
import ConstructionInMagadi from "./Components/LocationPages/ConstructionInMagadi.jsx/ConstructionInMagadi";
import ConstructionInHerohalli from "./Components/LocationPages/ConstructionInHerohalli/ConstructionInHerohalli";
import ConstructionInKengeri from "./Components/LocationPages/ConstructionInKengeri/ConstructionInKengeri";
import ConstructionInBidadi from "./Components/LocationPages/ConstructionInBidadi/ConstructionInBidadi";
import ConstructionResidential from "./Components/ConstructionServices/ConstructionResidential/ConstructionResidential";
import ConstructionContractors from "./Components/ConstructionServices/ConstructionContractors/ConstructionContractors";
import ConstructionService from "./Components/Construction/ConstructionService/ConstructionService";
import ConstructionShop from "./Components/ConstructionServices/ConstructionShop/ConstructionShop";
import ConstructionLowCost from "./Components/ConstructionServices/ConstructionLowCost/ConstructionLowCost";
import ConstructionHotel from "./Components/ConstructionServices/ConstructionHotel/ConstructionHotel";
import ConstructionPg from "./Components/ConstructionServices/ConstructionPg/ConstructionPg";
import ConstructionRental from "./Components/ConstructionServices/ConstructionRental/ConstructionRental";
import ConstructionArchitects from "./Components/ConstructionServices/ConstructionArchitects/ConstructionArchitects";
import ConstructionDuplex from "./Components/ConstructionServices/ConstructionDuplex/ConstructionDuplex";
import ConstructionBudget from "./Components/ConstructionServices/ConstructionBudget/ConstructionBudget";
import InteriorGlass from "./Components/InteriorServices/InteriorGlass/InteriorGlass";
import InteriorFalse from "./Components/InteriorServices/InteriorFalse/InteriorFalse";
import InteriorShower from "./Components/InteriorServices/InteriorShower/InteriorShower";
import InteriorToughened from "./Components/InteriorServices/InteriorToughened/InteriorToughened";
import InteriorModular from "./Components/InteriorServices/InteriorModular/InteriorModular";
import InteriorCabinet from "./Components/InteriorServices/InteriorCabinet/InteriorCabinet";
import InteriorBed from "./Components/InteriorServices/InteriorBed/InteriorBed";
import InteriorStudy from "./Components/InteriorServices/InteriorStudy/InteriorStudy";
import InteriorBook from "./Components/InteriorServices/InteriorBook/InteriorBook";
import InteriorPuja from "./Components/InteriorServices/InteriorPuja/InteriorPuja";
import InteriorCommercial from "./Components/InteriorServices/InteriorCommercial/InteriorCommercial";
import InteriorRestaurant from "./Components/InteriorServices/InteriorRestaurant/InteriorRestaurant";
import InteriorSalon from "./Components/InteriorServices/InteriorSalon/InteriorSalon";
import InteriorHospital from "./Components/InteriorServices/InteriorHospital/InteriorHospital";
import InteriorKindergarten from "./Components/InteriorServices/InteriorKindergarten/InteriorKindergarten";
import InteriorGypsumPartition from "./Components/InteriorServices/InteriorGypsumPartition/InteriorGypsumPartition";
import InteriorGypsumCeling from "./Components/InteriorServices/InteriorGypsumCeling/InteriorGypsumCeling";
import InteriorRetailStore from "./Components/InteriorServices/InteriorRetailStore/InteriorRetailStore";
import InteriorJewellery from "./Components/InteriorServices/InteriorJewellery/InteriorJewellery";
import InteriorResort from "./Components/InteriorServices/InteriorResort/InteriorResort";
import InteriorGridCeiling from "./Components/InteriorServices/InteriorGridCeiling/InteriorGridCeiling";
import InteriorDryWall from "./Components/InteriorServices/InteriorDryWall/InteriorDryWall";
import InteriorPvcCeiling from "./Components/InteriorServices/InteriorPvcCeiling/InteriorPvcCeiling";
import InteriorWoodenCeiling from "./Components/InteriorServices/InteriorWoodenCeiling/InteriorWoodenCeiling";
import InteriorToughenedGlassDoor from "./Components/InteriorServices/InteriorToughenedGlassDoor/InteriorToughenedGlassDoor";
import InteriorToughenedGlassPartition from "./Components/InteriorServices/InteriorToughenedGlassPartition/InteriorToughenedGlassPartition";
import InteriorHome from "./Components/InteriorServices/InteriorHome/InteriorHome";
import BlogDuplexHouse from "./Components/Blog/BlogPages/BlogDuplexHouse.jsx/BlogDuplexHouse";
import BlogInteriorPaint from "./Components/Blog/BlogPages/BlogInteriorPaint/BlogInteriorPaint";

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
          <Route
            path="/trending-window-and-door-options-for-modern-homes"
            element={<BlogWindowAndDoor />}
          />
          <Route
            path="/essential-vastu-tips-for-building-your-dream-home"
            element={<BlogEssentialVastu />}
          />
          <Route
            path="/modern-kitchen-and-hall-design-ideas-for-your-home"
            element={<BlogKitchenHallDesign />}
          />
          <Route
            path="/everything-you-need-to-know-about-false-ceiling-costs-in-bangalore"
            element={<BlogFalseCeiling />}
          />
          <Route
            path="/building-strong-foundations-with-durable-pcc-concreting-for-your-projects"
            element={<BlogPccConcreting />}
          />
          <Route
            path="/expert-duplex-house-construction-crafting-dreams-for-modern-living"
            element={<BlogDuplexHouse />}
          />
          <Route
            path="/trending-interior-paint-colors-and-expert-tips-for-your-home"
            element={<BlogInteriorPaint />}
          />
          {/* --------------------------CategoryDoorsAndWindows------------------------------------------- */}
          <Route
            path="/category-construction"
            element={<CategoryConstruction />}
          />
          <Route
            path="/category-doors-and-windows"
            element={<CategoryDoorsAndWindows />}
          />
          <Route
            path="/category-false-ceiling"
            element={<CategoryFalseCeiling />}
          />
          {/* -----------------------------Locations------------------------------ */}
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
          <Route
            path="/house-construction-company-in-madanayakana-halli"
            element={<ConstructionInMadanaykanahalli />}
          />
          <Route
            path="/house-construction-company-in-magadi-road"
            element={<ConstructionInMagadi />}
          />
          <Route
            path="/house-construction-company-in-herohalli"
            element={<ConstructionInHerohalli />}
          />
          <Route
            path="/house-construction-company-in-kengeri"
            element={<ConstructionInKengeri />}
          />
          <Route
            path="/house-construction-company-in-bidadi"
            element={<ConstructionInBidadi />}
          />
          <Route
            path="/house-construction-company-in-ms-palya"
            element={<ConstructionInMSPalya />}
          />
          <Route
            path="/house-construction-company-in-vidyaranyapura"
            element={<ConstructionInVidyaranyapura />}
          />{" "}
          <Route
            path="/house-construction-company-in-bagaluru"
            element={<ConstructionInBagaluru />}
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
