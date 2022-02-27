import "./index.css";
import React from "react";

import logo from "../../../assets/main-container/logo.png";

const Navbar = ({
  link1,
  link2,
  link3,
  link4,
  backgroundColor
}) => {
  return (
    <div className='navbar-div'>
      <div className="container" id='navbar-container'>
        <div id='logo-container'>
          <img src={logo}/>
        </div>

        <div id="links-container">
          <div className='link'>
            <a href="#about">
              {link1}
            </a>
          </div>
          <div className='link'>
            <a href="#bmi-calculator">
              {link2}
            </a>
          </div>
          <div className='link'>
            <a href="#price-list">
              {link3}
            </a>
          </div>
          <div className='link'>
            <a href="#contact">
              {link4}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
