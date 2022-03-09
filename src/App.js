import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useRef } from "react";

import "bootstrap-icons/font/bootstrap-icons.css";

// pages
import Home from "./pages/home";
import Navbar from "./components/organisms/navbar";
import MainContainer from "./components/organisms/main-container";
import About from "./components/organisms/about";
import Gallery from "./components/organisms/gallery";
import PriceList from "./components/organisms/price-list";
import BmiCalculator from "./components/organisms/bmi-calculator";
import Contact from "./components/organisms/contact";
import Footer from "./components/organisms/footer";
import DeveloperInfo from "./components/molecules/developer-info";
import { isInViewport } from "./helpers";

function App () {
  return (
    <div className='content' >
      <Navbar link1={"O nama"} link2={"BMI kalkulator"} link3={"Cjenik"} link4={"Kontakt"} link5={"radno vrijeme"}/>

      <MainContainer />

      <About />

      <Gallery />

      <PriceList />

      <BmiCalculator />

      <Contact />

      <Footer />

      <DeveloperInfo />

    </div>
  );
}

export default App;
