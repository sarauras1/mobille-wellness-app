import React from 'react';
import './Massages.css';


const massages = (props) => {
    return (
<div className="service-component" id="massage">

<div className="service-image-component">
  <img src={require('./m.unsplash.jpg')} alt="massage"/> 
</div>

<div className="service-h1-div-component">
 <h1 className="service-h1-component">Massages</h1>
<div className="block_1 hline-bottom"></div>
</div>
</div>
    );
}





export default massages;