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

  console.log(windowDimensions.height);

  return (
    <div className='container-background' style={{ height: windowDimensions.height }}>
      <div id="overlay">
        <div className='main-container' >
          <h1 id='main-title'>OLIMP</h1>
          <h1 id="title-city">BELIŠĆE</h1>
        </div>

        <ScrollDownArrow />
      </div>
    </div>

  );
};

export default MainContainer;
