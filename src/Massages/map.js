import React from 'react';
import './Massages.css';
import Info from './info';
import Button from '../Button/Button';
import massageData from './massageData';


const informa = (massagedata) => {
  return (
  <Info
    key={massagedata.id}
    name={massagedata.name}
    info={massagedata.info}
    price={massagedata.price}
  />
  )}
const massages = () => {
  return (
    <div className="service" id="massage">
      <div className="service-component">
        <div className="service-image-component">
          <img
            id="massage-image"
            src={require("./m.unsplash.jpg")}
            alt="massage"
          />
        </div>

        <div className="service-h1-div-component">
          <h1 className="service-h1-component">Massages</h1>
          <div className="block_1 hline-bottom"></div>

          <div className="facials-h4">{massageData.map(informa)}</div>
          
          <div className="margin-bottom"></div>
        </div>
      </div>
      <Button></Button>
    </div>
  );
};

export default massages;





 








