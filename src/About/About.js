import React from "react";
import "./About.css";
import Sara from './Sara.jpg';


const about = (props) => {
  return (
    <div className="about" id="about">
      <h1 className="services-h1-component">About us</h1>

      <div className="container-about">
        <img className="about-img" src={Sara} alt="me" />

        <div className="about-text">
          <h4 className="about-h4">Profile</h4>
          <p className="info-p">
            All Beauty By Sara is a home service business based in London,
            England. Offers a wide range of beauty and wellness servives using 
            Organic products and High-quality brands to achieve the best results.
             We strive to deliver exceptional services that meet or even
            exceed our clients’ expectations.
          </p>
          <p className="info-p">
            Highly experienced and fully certified mobile beauty therapist since
            2007.
          </p>
          <p className="info-p">
            Worked at exclusive events such as London fashion shows and with a 
            number of A-list celebrities amongst her former clients.
          </p>

          <h4 className="about-h4">Mission</h4>
          <p className="info-p">
            Our mission is to deliver luxurious beauty treatments<br></br>
             at your home or office that will save you time,
             but more importantly, that keep you comfortable.
          </p>
        </div>
      </div>
    </div>
  );
};
export default about;
