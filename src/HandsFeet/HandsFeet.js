import React from 'react';
import './HandsFeet.css';


const handsFeet = (props) => {
    return (
<div className="HandsFeet" id="handsFeet">
<div className="HandsFeet-h1-div">
     <h1 id="HandsFeet-h1">Hands &amp; Feet</h1>
 </div>
<div className="HandsFeet-image">
<img src={require('./manicure.jpg')} alt="manicure"/> 
</div>
</div>
    );
}





export default handsFeet;