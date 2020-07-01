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
     <div className="pamper-para">
 <p>Pamper and relax with All Beauty By Sara mobile spa pamper parties all over London.
   Treat your self and friends or collegues at home or office.
   Tailored and Personalized packeges at your convenience are available,
   with a large range of services options.
   please contact me for more information,
    I will be happy to discust with you the best options available.
</p>
</div>
 </div>
</div>
    );
}





export default pamper;