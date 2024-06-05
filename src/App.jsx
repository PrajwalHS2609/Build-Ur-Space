import React from "react";
import HomePage from "./Components/HomePage/HomePage";
import "./Global.css";
import "./Fonts/futura/FUTURA45LIGHT.TTF";
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Package from "./Components/PackagePage/Package";
import PackageList from "./Components/PackagePage/PackageList";
import ScrollTo from "./Components/ScrollTo/ScrollTo";
import AboutUs from "./Components/AboutUs/AboutUs";
import Interior from "./Components/Interior/Interior";
import Construction from "./Components/Construction/Construction";
import Contacts from "./Components/Contacts/Contacts";
import CommercialInterior from "./Components/CommercialInterior/CommercialInterior";
import PackageContext from "./Components/PackagePage/PackageContext";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ScrollTo />
        <PackageContext>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/house-interior" element={<Interior />} />
            <Route path="/house-construction" element={<Construction />} />
            <Route path="/contact-us" element={<Contacts />} />
            <Route
              path="/commercial-interior"
              element={<CommercialInterior />}
            />

            <Route path="/packages" element={<Package />}>
              <Route
                path="/packages/product-package1"
                element={<PackageList />}
              />
              <Route
                path="/packages/product-package1"
                element={<PackageList />}
              />
              <Route
                path="/packages/product-package1"
                element={<PackageList />}
              />
              <Route
                path="/packages/product-package1"
                element={<PackageList />}
              />
              <Route
                path="/packages/product-package1"
                element={<PackageList />}
              />
            </Route>
          </Routes>
        </PackageContext>
      </BrowserRouter>
    </div>
  );
};

export default App;
