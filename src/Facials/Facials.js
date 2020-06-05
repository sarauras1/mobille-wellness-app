import React from 'react';
import OpenWindow from './Pitta';
import OpenWindow1 from './Vata';
import './Facials.css';


const facials = (props) => {
    return (
<div className="service-component" id="facials">

<div className="service-image-component">
  <img src={require('./facials.jpg')} alt="massage"/> 
</div>

<div className="service-h1-div-component">
 <h1 className="service-h1-component">Ayurvedic Facials</h1>
<div className="block_1 hline-bottom"></div>
<div className="facials-h4">
<OpenWindow/>
</div>
<div className="facials-h4">
<OpenWindow1/>
</div>

</div>
</div>
    );
}





export default facials;