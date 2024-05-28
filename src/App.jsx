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
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ScrollTo />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/package" element={<Package />}>
            <Route path="/package/product-package1" element={<PackageList />} />
            <Route path="/package/product-package2" element={<PackageList />} />
            <Route path="/package/product-package3" element={<PackageList />} />
          </Route>
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
