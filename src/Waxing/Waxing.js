import React from "react";
import "./Waxing.css";
import Button from "../Button/Button";
import WaxingData from './waxingData';

const waxing = (props) => {
  return (
    <div className="waxing" id="waxing">
      <div className="waxing-component">
        <div className="waxing-image-component">
          <img
            className="waxing-image"
            src={require("./armpit-wax.jpg")}
            alt="wax"
          />
        </div>

        <div className="waxing-div-component">
          <h1 className="waxing-h1-component">Hair Removal</h1>
          <div className="block_1 hline-bottom"></div>
          <div className="waxing-para">
            <p>
              Quick and pain-free waxing. Sara designed a unique pain-free
              method studied within 15 years of experience in waxing treatments.
              Guaranteed even for the most sensitive skin! leaving the skin nice
              and soft after moisturizing with organic oils from the Lakhsmi
              skincare brand.
            </p>
         
            <p>
              I recommend avoiding sauna, hot baths, sun exposure before or
              after waxing treatment. Carefully exfoliate 1 day before and 1
              time per week after waxing, followed by moisturized, will ensure a
              long-lasting waxing treatment and a better result.
            </p>

            <p>
              ATTENTION: You must avoid waxing treatments if you are under acne
              medications or chemotherapy.
            </p>
          </div>
        </div>
      </div>
      <div class="price-div-waxing">
        <h2 className="waxing-h2">Prices</h2>
        {WaxingData.map((data) => (
          <div className="waxing-price-div">
            <span className="waxing-price">{data.price}</span>
          </div>
        ))}
        <div className="waxing-price-image"></div>
        <div className="waxing-price-image-right"></div>
        <Button></Button>
      </div>
    </div>
  );
};

export default waxing;
