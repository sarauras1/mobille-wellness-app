import React from 'react';
import './Yoga.css';
import Button from "../../components/Button/Button";
import Yoga from './balance-city.jpg'
const yoga = (props) => {
    return (
      <div id="yoga">
        <div className="yoga-component">
          <div className="yoga-image-component">
            <img
            loading="lazy" 
              className="Yoga-image"
              src={Yoga}
              alt="Yoga"
            />
            
          </div>
          <div className="yoga-div-component">
            <h1 className="service-h1-component">
              Hatha Yoga
            </h1>
            <div className="block_1 hline-bottom"></div>

            <div className="yoga-paragraph">
              <p className="info-p">
                Yoga is a transformation pratice that encourage the union of
                mind, body, and spirit. It helps us to tune in our body's needs,
                rewarding us with a whole host of health benefits both mental
                and physical. As well increase flexibility, strenght and
                balance, it also can with poor digestion, insomnia, anxiety,
                stress of life.
              </p>
              <p className="info-p">
                Designed to bring awareness in to the mind and body by focusing
                on breath and alignment. I will be covering slow motion sequence
                movement to improve flexibily and strenght. One translation of
                the sansKrit word Hatha means sun-moon, so through this pratice
                you will learn to find balance - not just sense of equilibrium
                in the body and mind, the balance between effort and surrender
                in each posture. Hatha Flow is great to build foundations for
                your pratice. Suitable for everyone.
              </p>

              <p className="info-p">
                One-to-one classes are available from the price of £ 30,
                depending on time and location! And small groups classes from £
                15 per person.
              </p>

              <h3 className="zoom">
                One-to-one zoom classes are now available with 50% discount.Try
                out 30 min free class
              </h3>
              <span className="price">From £ 30 per 1 hour class</span>
            </div>
          </div>
        </div>

        <Button></Button>
      </div>
    );
}





export default yoga;