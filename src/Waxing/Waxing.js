import React from 'react';
import './Waxing.css';


const waxing = (props) => {
    return (
<div className="Waxing" id="waxing">
<div className="Waxing-h1-div">
     <h1 id="Waxing-h1">Hatha Yoga</h1>
 </div>
<div className="Waxing-image">
<img src={require('./armpit-wax.jpg')} alt="wax"/> 
</div>
</div>
    );
}





export default waxing;