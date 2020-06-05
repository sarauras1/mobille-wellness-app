import React from 'react';
import './Pamper.css';



const pamper = (props) => {


    return (
<div className="service-component" id="pamper">
<div className="service-image-component">
<img src={require('./corporate.jpg')} alt="corporate"/> 
</div>
<div className="service-h1-div-component">
     <h1 className="service-h1-component">Pamper Parties &amp; Corporate</h1>
     <div className="block_1 hline-bottom"></div>
 </div>
 
</div>
    );
}





export default pamper;