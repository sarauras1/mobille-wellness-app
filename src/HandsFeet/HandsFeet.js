import React from 'react';
import './HandsFeet.css';
import OpenWindowMani from './OpenWindowMani';
import OpenWindowPedi from './OpenWindowPedi';
import OpenWindowShMani from './OpenWindowShMani';
import OpenWindowShPedi from './OpenWindowShPedi';


const handsFeet = (props) => {
    return (
  <div className="service-component" id="handsFeet">

   <div className="service-image-component">
     <img id="hfimage" src={require('./manicure.jpg')} alt="manicure"/> 
   </div>

  <div className="service-h1-div-component">
    <h1 className="service-h1-component">Hands &amp; Feet</h1>
   <div className="block_1 hline-bottom"></div>
   <div className="shellac-h4">
<OpenWindowMani/>
</div>

<div className="shellac-h4">
<OpenWindowPedi/>
</div>

<div className="shellac-h4">
<OpenWindowShMani/>
</div>

<div className="shellac-h4">
<OpenWindowShPedi/>
</div>
  </div>
  <div class="margin-bottom"></div>
</div>
    );
}





export default handsFeet;