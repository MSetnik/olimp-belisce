import "./index.css";
import React from "react";

import { img0, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15 } from "../../../assets/gallery";

const Gallery = () => {
  return (
    <div className='gallery-container'>
      <div className='gallery-title'>
        <h1>GALERIJA</h1>
      </div>
      <div className='container'>
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="8" aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="9" aria-label="Slide 10"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="10" aria-label="Slide 11"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="11" aria-label="Slide 12"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="12" aria-label="Slide 13"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="13" aria-label="Slide 14"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="14" aria-label="Slide 15"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="15" aria-label="Slide 16"></button>
          </div>
          <div className="carousel-inner" data-bs-interval="3000">
            <div className="carousel-item active" data-bs-interval="3000">
              <img src={img0} className="d-block h-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img1} className="d-block h-100" alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img2} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img3} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img4} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img5} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img6} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img7} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img8} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img9} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img10} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img11} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img12} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img13} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img14} className="d-block h-100 " alt="..."/>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <img src={img15} className="d-block h-100 " alt="..."/>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

        </div>

      </div>

    </div>
  );
};

export default Gallery;
