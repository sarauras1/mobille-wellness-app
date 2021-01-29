import React from 'react';
import './Pamper.css';
import Button from '../Button/Button';


const pamper = () => {


  return (
    <div className="pamper" id="pamper">
      <div className="pamper-component">
        <div className="pamper-image-component">
          <img
            className="pamper-image"
            src={require("./corporate.jpg")}
            alt="corporate"
          />
        </div>

        <div className="pamper-div-component">
          <h1 className="service-h1-component">
            Pamper Parties &amp; Corporate
          </h1>
          <div className="pamper-para">
            <p className="info-p">
              Pamper and relax with All Beauty By Sara mobile spa pamper parties
              all over London. Treat your self and friends or collegues at home
              or office. Tailored and Personalized packeges at your convenience
              are available, with a large range of services options at an
              affordable price. Please contact me for more information, I will
              be happy to discuss with you the best options available.
            </p>
          </div>
          <Button />
        </div>
      </div>
    </div>
  );
}





export default pamper;