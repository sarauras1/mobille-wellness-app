import React from 'react';
import './HandsFeet.css';


const handsFeet = (props) => {
    return (
  <div className="service-component" id="handsFeet">

   <div className="service-image-component">
     <img src={require('./manicure.jpg')} alt="manicure"/> 
   </div>

  <div className="service-h1-div-component">
    <h1 className="service-h1-component">Hands &amp; Feet</h1>
   <div className="block_1 hline-bottom"></div>
  </div>
</div>
    );
}





export default handsFeet;