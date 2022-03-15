import "./index.css";
import React, { useEffect, useRef } from "react";

import logo from "../../../assets/main-container/logo.png";

import { FiMenu, FiUser } from "react-icons/fi";

const Navbar = ({
  link1,
  link2,
  link3,
  link4,
  link5,

  link1href = "#about",
  link2href = "#price-list",
  link3href = "#bmi-calculator",
  link4href = "#contact",
  link5href = "#working-hours",
  active = null
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

    const borderActive = document.querySelectorAll(".link-border-top");
    const link = document.querySelectorAll(".link");

    if (active === null) {
      // for nav on click element
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
    } else {
      link.forEach((v, itemIndex) => {
        // v.addEventListener("click", () => {
        //   borderActive.forEach(j => j.classList.remove("link-selected"));
        //   const border = v.querySelectorAll(".link-border-top");
        //   border[0].classList.add("link-selected");
        // });

        if (v.children[1].innerHTML === active) {
          borderActive.forEach((j, borderIndex) => {
            j.classList.remove("link-selected");

            if (itemIndex === borderIndex) {
              j.classList.add("link-selected");
            }
          });
        }
      });

      // borderActive.forEach(j => j.classList.remove("link-selected"));
      // const border = v.querySelectorAll(".link-border-top");
    }
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
            <a href={link1href}>
              {link1}
            </a>
          </div>

          <div className='link'>
            <div className="link-border-top" />

            <a href={link2href}>
              {link2}
            </a>
          </div>

          <div className='link'>
            <div className="link-border-top" />

            <a href={link3href}>
              {link3}
            </a>
          </div>
          <div className='link'>
            <div className="link-border-top" />
            <a href={link4href}>
              {link4}
            </a>
          </div>

          <div className='link'>
            <div id='nav-link-working-hours' className="link-border-top" />
            <a href={link5href}>
              {link5}
            </a>
          </div>
        </div>

        <div className='link link-login'>
          <div id='nav-link-login' className="link-border-top" />
          <a href="/login">
            <FiUser color="white" size={24}/>
          </a>
        </div>

      </div>

    </div>

  );
};

export default Navbar;
