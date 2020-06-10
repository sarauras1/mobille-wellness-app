import React from 'react';
import OpenWindowPitta from './Pitta';
import OpenWindowVata from './Vata';
import Kapha from './Kapha';
import OpenWindowAge from './AntiAge';
import './Facials.css';


const facials = (props) => {
    return (
<div  id="facials">
<div className="service-component" >
<div className="service-image-component">
  <img src={require('./facials.jpg')} alt="massage"/> 
</div>

<div className="service-h1-div-component">
 <h1 className="service-h1-component">Ayurvedic Organic Facials</h1>
 <span className="Gold">By Lakshmi</span>
<div className="block_1 hline-bottom"></div>

<div className="facials-h4">
<OpenWindowPitta/>
</div>

<div className="facials-h4">
<OpenWindowVata/>
</div>

<div className="facials-h4">
<Kapha/>
</div>

<div className="facials-h4">
<OpenWindowAge/>
</div>
</div>
</div>
<div  className="facials-img">
<img id="lakshmi"src={require('./gold-l.jpg')} alt="lakshmi"/>

<div className="lakshmi-para">
  <p>
  One of the largest laboratories of natural products in Europe, with more than 2 millions pieces produced every year.
   Thanks also to two great cosmetologists with a passion for natural products, Today almost all our products are completely natural and have been certified as natural by ICEA, the association that certifies natural products.
  Lakshmi’s deepest and most vital aim is to transfer the inseparable “Beauty and Well-being” combination into everyday life.
   The result is an extraordinary line of cosmetics “Made with Joy”, conceived and produced with joy, love and respect.</p>


   <p>THE COMPANY Lakshmi, for over 26 years (Since 1990) in the wellness sector and natural cosmetics, comes from a deep 
passion for the East and the ancient wisdom of Ayurveda.</p>

<p>Lakshmi has developed a line of absolutely extraordinary cosmetics by combining the wisdom of Ayurveda, Naturopathy and Aromatherapy with the most advanced cosmetic knowledge,
 the organic natural products and the essential oils to bring beauty and excellence to skin of all types based on the 
 Doshas (Vata, Pitta or Kapha).</p>

 <p>For over twenty years Lakshmi has been producing more than 300 Certified Eco-Organic products, 
not tested on animals. Showing coherence and commitment to its ethical values.
  </p>
</div>
</div>
</div>
    );
}





export default facials;