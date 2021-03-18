import React from "react";
import "./Banner.css";
//import banner2 from "../banner2.gif";
//import banner1 from "../bannersmall.png";
const Banner = () => {
  return (
    <div id="banner" className="Banner-Slicer">
      <div className="Banner-Slicer">
        <img
          className="banner2"
          src="../images/banner2.gif"
          alt="wellness"
          loading="lazy"
        />
        <img
          className="banner1"
          src="./images/bannersmall.png"
          alt="wellness"
          loading="lazy"
        />
        <div className="div-banner-small">
          <h1
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-easing="ease"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
            className="banner-title"
          >
            {" "}
            The Mobile Wellness
          </h1>
          <p
            className="banner-para"
            data-aos="fade-left"
            data-aos-easing="ease"
            data-aos-offset="20"
            data-aos-delay="50"
            data-aos-duration="2000"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            {" "}
            Book your treatments at the comfort of your own home
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
