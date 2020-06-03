import React from 'react';
import './Massages.css';


const massages = (props) => {
    return (
<div className="Massages" id="massages">
<div className="Massages-h1-div">
     <h1 id="Massages-h1">Massages</h1>
 </div>
<div className="HandsFeet-image">
<img src={require('./m.unspalsh.jpg')} alt="massage"/> 
</div>
</div>
    );
}





export default massages;