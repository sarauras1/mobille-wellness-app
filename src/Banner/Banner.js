

import React from 'react';
import './Banner.css';
import banner2 from './banner2.gif';
import banner1 from './bannersmall.png';
const Banner = () => {
  return (
    <div id="banner" className="Banner-Slicer">
      <div className="Banner-Slicer">
        <img className="banner2" src={banner2} alt="wellness" />
        <img className="banner1" src={banner1} alt="wellness" />
        <div className="div-banner-small">
          <h1
            data-aos="fade-right"
      
            data-aos-easing="ease"
            data-aos-anchor-placement="top-center"
            className="banner-title"
          >
            The Mobile Wellness
          </h1>
          <p
            className="banner-para"
            data-aos="fade-left"
           
            data-aos-easing="ease"
            data-aos-anchor-placement="top-center"
          >
            Book your treatments at the comfort of your own home
          </p>
        </div>
      </div>
    </div>
  );
  };


  export default Banner;



 


