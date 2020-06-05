import React from 'react';
import './Yoga.css';


const yoga = (props) => {
    return (
<div className="Yoga" id="yoga">

<div className="Yoga-h1-div">
     <h1 id="Yoga-h1">Hatha Yoga</h1>
     <div class="block_1 hline-bottom"></div>
 </div>

<div className="Yoga-image">
<img src={require('./balance-city.jpg')} alt="yoga"/> 
</div>

</div>
    );
}





export default yoga;