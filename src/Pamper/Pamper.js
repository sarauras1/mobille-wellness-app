import React from 'react';
import './Pamper.css';


const pamper = (props) => {
    return (
<div className="Pamper" id="pamper">
<div className="Pamper-h1-div">
     <h1 id="Pamper-h1">Pamper Parties &amp; Corporate</h1>
 </div>
<div className="Pamper">
<img src={require('./corporate.jpg')} alt="corporate"/> 
</div>
</div>
    );
}





export default pamper;