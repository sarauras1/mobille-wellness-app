import React from 'react';
import './Waxing.css';


const waxing = (props) => {
    return (
        <div className="service-component" id="waxing">

      <div className="service-image-component">
         <img src={require('./armpit-wax.jpg')} alt="wax"/> 
      </div>

     <div className="service-h1-div-component">
          <h1 className="service-h1-component">Hair Removal</h1>
        <div className="block_1 hline-bottom"></div>
      </div>
      
 </div>

    );
}





export default waxing;