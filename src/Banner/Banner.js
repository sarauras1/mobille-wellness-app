import React from 'react';
import './Banner.css';




const Banner = () => {
  return (
    <div id="banner" className="Banner-Slicer">
      <div className="Banner-Slicer">
        <img className="banner2" src={require("./banner2.gif")} alt="wellness" />
        <img className="bannerphone" src={require("./phonebanner.gif")} alt="beauty" />
      </div>
    </div>
  );
  };


  export default Banner;


