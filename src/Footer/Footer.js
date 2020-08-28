import React from 'react';
import './Footer.css';
import { NavHashLink } from "react-router-hash-link";
const footer = props => {
  return (
      <div id="footer" className="footer">
      

<div id="container">
   <div className="left">
     <h3>Services</h3>
     <NavHashLink to="/yoga" className="current-footer"> <li>Hatha Yoga</li> </NavHashLink>
     <NavHashLink to="/facials" className="current-footer"><li>Facials</li></NavHashLink>
     <NavHashLink to="/massages" className="current-footer"><li>Massages</li></NavHashLink>
     <NavHashLink to="/handsFeet" className="current-footer"><li>Hands &amp; Feet</li></NavHashLink>
     <NavHashLink to="/pamper" className="current-footer"><li>Pamper Parties</li></NavHashLink>
     <NavHashLink to="/waxing" className="current-footer"><li>Hair Removal</li></NavHashLink>

   </div>
   <div className="center">
   <h3>Let's get in touch!</h3>
   <p>
  Thank you for choosing All Beauty By Sara in London, England! Please send me an email or WhatsApp me for enquiries about my services. I will respond 
  to you at the soonest possible time.
  </p>
   </div>
   <div className="right">
   <h3>Contact</h3>
   <li>London UK </li>
   <li>07413140617 </li>
   <li>allbeautybysara@gmail.com </li>
   <li><a href="https://www.instagram.com/allbeautybysara/"><img src={require('./instagram.png')} alt="instagram"/></a></li>
   <li><a href="https://www.facebook.com/sara.allbeauty.3"><img  src={require('./facebook.png')} alt="facebook"/> </a></li>
     </div>
</div> 
<div className="hline-bottom-footer"></div>
<NavHashLink to="/privacy" className="current-footer"><li id="privacy-li">Privacy and Policy</li></NavHashLink>
<div className="copiright"><small>&copy; All Rights reserved by SaraWebDev</small></div>
      </div>
  )
}



export default footer;