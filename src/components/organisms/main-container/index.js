import "./index.css";
import React, { useEffect, useState } from "react";

// Images
import img1 from "../../../assets/main-container/olimp-belisce.jpeg";
import ScrollDownArrow from "../../molecules/scroll-down-arrow";

// Helpers
import { getWindowDimensions } from "../../../helpers";

const MainContainer = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  window.addEventListener("scroll", () => {
    const mainContainer = document.getElementsByClassName("header-container");

    if (window.pageYOffset >= 10) {
      mainContainer[0].classList.add("navbar-sticky-margin");
    } else {
      mainContainer[0].classList.remove("navbar-sticky-margin");
    }
  });

  return (
    <div id="#" className='header-container' style={{ height: windowDimensions.height }}>
      <div className='container-background'>
        <div id="overlay">
          <div className='main-container' >
            <h1 id='main-title'>OLIMP</h1>
            <h1 id="title-city">BELIŠĆE</h1>

            <div className="scroll-down-arrow">
              <ScrollDownArrow />

            </div>

          </div>

        </div>
      </div>

    </div>

  );
};

export default MainContainer;
