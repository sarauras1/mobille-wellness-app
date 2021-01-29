import React from 'react';
import './Banner.css';
import banner2 from './banner2.gif';
import phone from './phonebanner.gif';


const Banner = () => {
  return (
    <div id="banner" className="Banner-Slicer">
      <div className="Banner-Slicer">
        <img className="banner2" src={banner2} alt="wellness" />
        <img className="bannerphone" src={phone} alt="beauty" />
      </div>
    </div>
  );
  };


  export default Banner;


