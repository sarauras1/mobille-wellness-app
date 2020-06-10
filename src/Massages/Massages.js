import React from 'react';
import './Massages.css';
import Relaxing from './Relaxing';
import Combine from './Combine';
import Swedish from './Swedish';
import Thaimassage from './Thaimassage';
import Deeptissue from './Deeptissue';
import Ayurveda from './Ayurveda';

const massages = (props) => {
    return (
<div className="service-component" id="massage">

<div className="service-image-component">
  <img src={require('./m.unsplash.jpg')} alt="massage"/> 
</div>

<div className="service-h1-div-component">
 <h1 className="service-h1-component">Massages</h1>
<div className="block_1 hline-bottom"></div>
<div className="facials-h4">
<Relaxing/>
</div>
<div className="massage-h4">
<Combine/>
</div>
<div className="massage-h4">
<Swedish/>
</div>
<div className="massage-h4">
<Thaimassage/>
</div>
<div className="massage-h4">
<Deeptissue/>
</div>
<div className="massage-h4">
<Ayurveda/>
</div>

</div>
</div>
    );
}





export default massages;