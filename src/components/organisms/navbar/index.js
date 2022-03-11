import "./index.css";
import React, { useEffect, useRef } from "react";

import logo from "../../../assets/main-container/logo.png";

import { FiMenu } from "react-icons/fi";

const Navbar = ({
  link1,
  link2,
  link3,
  link4,
  link5,
  backgroundColor
}) => {
  let e;

  window.addEventListener("scroll", () => {
    const navbar = document.getElementsByClassName("navbar-div");

    if (window.innerWidth >= 768) {
      if (window.pageYOffset >= 100) {
        navbar[0].classList.add("sticky");
      } else {
        navbar[0].classList.remove("sticky");
      }
    } else {
      if (window.pageYOffset > 0) {
        navbar[0].classList.add("sticky");
      } else {
        navbar[0].classList.remove("sticky");
      }
    }
  });

  useEffect(() => {
    window.setTimeout(function () {
      e = document.getElementsByClassName("link-border-top");
      const eClasses = [...e];

      eClasses.forEach(element => {
        element.style.visibility = "visible";
      });
    }, 200);

    // for nav on click element
    const borderActive = document.querySelectorAll(".link-border-top");
    const link = document.querySelectorAll(".link");

    link.forEach(v => {
      v.addEventListener("click", () => {
        borderActive.forEach(j => j.classList.remove("link-selected"));
        const border = v.querySelectorAll(".link-border-top");
        border[0].classList.add("link-selected");
      });
    });

    // for window scrolldown event
    const mainSection = document.querySelectorAll(".scroll-content");

    window.onscroll = () => {
      const root = document.querySelectorAll("#root");

      mainSection.forEach((v, i) => {
        const rect = v.getBoundingClientRect().y;
        if (rect < window.innerHeight - 200) {
          borderActive.forEach(v => v.classList.remove("link-selected"));
          borderActive[i].classList.add("link-selected");
        }

        if (window.pageYOffset <= 200) {
          borderActive.forEach(v => v.classList.remove("link-selected"));
        }

        if (window.pageYOffset >= 1600 && window.pageYOffset <= 2400) {
          borderActive.forEach(v => v.classList.remove("link-selected"));
        }

        if (window.pageYOffset >= document.body.scrollHeight - (window.innerHeight / 2) - 700) {
          const workingHours = document.querySelector("#nav-link-working-hours");
          borderActive.forEach(v => v.classList.remove("link-selected"));
          borderActive[mainSection.length].classList.add("link-selected");
        }
      });
    };
  }, []);

  return (
    <div className='navbar-div'>
      <div className="navbar container navbar-container-drawer-opened" id='navbar-container'>
        <div id='logo-container'>
          <a className="logo-container-link" href='#'>
            <img className="logo" src={logo}/>
          </a>
        </div>

        <div id="links-container">
          <div className='link'>
            <div className="link-border-top link-selected" />
            <a href="#about">
              {link1}
            </a>
          </div>

          <div className='link'>
            <div className="link-border-top" />

            <a href="#price-list">
              {link3}
            </a>
          </div>

          <div className='link'>
            <div className="link-border-top" />

            <a href="#bmi-calculator">
              {link2}
            </a>
          </div>
          <div className='link'>
            <div className="link-border-top" />
            <a href="#contact">
              {link4}
            </a>
          </div>

          <div className='link'>
            <div id='nav-link-working-hours' className="link-border-top" />
            <a href="#working-hours">
              {link5}
            </a>
          </div>
        </div>

      </div>

    </div>

  );
};

export default Navbar;
