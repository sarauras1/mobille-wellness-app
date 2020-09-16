import React from "react";
import "./Waxing.css";
import Button from "../Button/Button";
const waxing = (props) => {
  return (
    <div className="service" id="waxing">
      <div className="service-component">
        <div className="service-image-component">
          <img id="waxing-image" src={require("./armpit-wax.jpg")} alt="wax" />
        </div>

        <div className="service-h1-div-component">
          <h1 className="service-h1-component">Hair Removal</h1>
          <div className="block_1 hline-bottom"></div>
          <div className="waxing-para">
            <p>
              Quick and pain-free waxing. Sara designed a unique pain-free
              method studied within 15 years of experience in waxing treatments.
              Guaranteed even for the most sensitive skin! leaving the skin nice
              and soft after moisturizing with organic oils from the Lakhsmi
              skincare brand.
            </p>
            <p>Available for Male and Female</p>

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
        <h2 className="waxing-h4">Prices</h2>
        <br></br>
        <span className="price-waxing">Upper lip wax or threading £ 5</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Chin wax or threading £ 5</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Eyebrows wax or threading £ 10</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Full face wax or threading £ 20</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Small area body or face wax £ 5</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Under arms wax £ 15</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Half arms wax £ 20</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Full arms wax £ 25</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Half legs £ 25</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Full legs wax £ 35</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Bikini wax £ 20</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Brasilian wax £ 35</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Hollywood wax £ 40</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Female back wax £ 30</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Male Chest and stomach wax £ 50</span>
        <br></br>
        <div className="margin-bottom-span"></div>
        <span className="price-waxing">Male back wax £ 50</span>
        <br></br>
        <div className="margin-bottom-span"></div>
      </div>
      <Button></Button>
    </div>
  );
};

export default waxing;
