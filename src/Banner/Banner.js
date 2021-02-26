import React from 'react';
import './Banner.css';
import banner2 from './banner2.gif';

const Banner = () => {
  return (
    <div id="banner" className="Banner-Slicer">
      <div className="Banner-Slicer">
        <img className="banner2" src={banner2} alt="wellness" />
       <h1 className="Banner-text">Welcome to All Beauty By Sara</h1>
      </div>
    </div>
  );
  };


  export default Banner;


