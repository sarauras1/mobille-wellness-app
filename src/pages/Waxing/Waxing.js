import React from "react";
import "./Waxing.css";
import Button from "../../components/Button/Button";
import WaxingData from './waxingData';
import Waxing from "./armpit-wax.jpg";


const waxData  = [
  {
    id: 1,
    text: "Quick and pain-free waxing. Sara designed a unique pain-free method studied within 15 years of experience in waxing treatments. Guaranteed even for the most sensitive skin! leaving the skin significantly soft after moisturizing with organic oils, where contain, natural ingredients to retard the hair growth and to leave your skin nice and smouth."
             
  },
  {
    id: 2,
    text: " I recommend avoiding sauna, hot baths, sun exposure before or after waxing treatment. Carefully exfoliate 1 day before and 1 time per week after waxing, followed by moisturizing, will ensure a long-lasting waxing treatment and a better result."
  },
 {
  id: 3,
  text: "ATTENTION: You must avoid waxing treatments if you are under acne medications or chemotherapy."
  }
]

const waxing = (props) => {
  return (
    <div className="waxing" id="waxing">
      <div className="waxing-component">
        <div className="waxing-image-component">
          <img className="waxing-image" src={Waxing} alt="wax" />
        </div>

        <div className="waxing-div-component">
          <h1 className="service-h1-component">Hair Removal</h1>
          <div className="block_1 hline-bottom"></div>
          <div className="waxing-para">
            {waxData.map((data) => (
              <p className="info-p">{data.text}</p>
            ))}                
         
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
