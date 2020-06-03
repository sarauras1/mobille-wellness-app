import React from 'react';
import './HandsFeet.css';


const handsFeet = (props) => {
    return (
<div className="HandsFeet">
<div className="HandsFeet-background">
<div><img 
src={require('./background-nails.jpg')} alt="back-nails"/> </div>

 <div className="HandsFeet-h1-div">
     <h1 id="HandsFeet-h1">Hands &amp; Feet</h1>
 </div>
</div>
</div>
    );
}





export default handsFeet;