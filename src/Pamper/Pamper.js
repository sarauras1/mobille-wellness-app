import React from 'react';
import './Pamper.css';


const pamper = (props) => {
    return (
<div className="Pamper" id="Pamper">
<div className="Pamper-h1-div">
     <h1 id="Pamper-h1">Massages</h1>
 </div>
<div className="Pamper">
<img src={require('./m.unspalsh.jpg')} alt="massage"/> 
</div>
</div>
    );
}





export default pamper;