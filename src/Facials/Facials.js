import React from 'react';
import './Facials.css';


const facials = (props) => {
    return (
<div className="Facials" id="facials">
<div className="Facials-h1-div">
  <h1 id="Facials-h1">Ayurvedic Facials</h1>
 <div class="block_1 hline-bottom"></div>
 </div>
<div className="Facials-image">
<img src={require('./facials.jpg')} alt="facials"/> 
</div>
</div>
    );
}





export default facials;