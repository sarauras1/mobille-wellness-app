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
      </div>
    </div>
  );
  };


  export default Banner;


