import React from 'react';
import './Footer.css';

const footer = props => {
  return (
      <div className="footer">
      

<div id="container">
   <div className="left">
     <h3>Services</h3>
   <li>Hatha Yoga</li>
   <li>Facials</li>
   <li>Massages</li>
   <li>Hands &amp; Feet</li>
   <li>Pamper Parties</li>
   <li>Hair Removal</li>

   </div>
   <div className="center">
   <h3>Let's get in touch!</h3>
   <p>
  Thank you for choosing All Beauty By Sara in London, England! Please send me an email or a
  text message for enquiries about my services. If you prefer to contact me by phone and I
  am not able to answer your call, please do not hesitate to leave a message. I will respond 
  to you at the soonest possible time.
  </p>
   </div>
   <div className="right">
   <h3>Contact</h3>
   <li>London UK </li>
   <li>07413140617 </li>
   <li>allbeautybysara@gmail.com </li>
   <li><a href="address"><img src={require('./instagram.png')} alt="instagram"/></a></li>
   <li><a href="address"><img  src={require('./facebook.png')} alt="facebook"/> </a></li>
     </div>
</div> 
<div className="hline-bottom-footer"></div>
<div className="copiright"><small>&copy; All Rights reserved by SaraWebDev</small></div>
      </div>
  )
}



export default footer;