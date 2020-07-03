import React from 'react';
import './Services.css';
import { NavHashLink } from "react-router-hash-link";
import MainText from '../TextSlice/MainText';

const services = props => {
        return (
          <div className="Services" id="services">
        <NavHashLink to="/waxing" className="current-serv">
     <div className="svg"><img src={require('./depilation.png')} alt="waxing"/>
         <h2>Hair Removal</h2>
         <h5>Hot wax</h5>
         <h5>Strip Wax</h5>
         <h5>Threading</h5>
      </div>
      </NavHashLink>
      <NavHashLink to="/yoga" className="current-serv">
  <div className="svg"><img src={require('./excercise.png')} alt="yoga"/> 
          <h2>Hatha Yoga</h2>
         <h5>Beginners levels</h5>
         <h5>Intermediate levels</h5>
         <h5>One to one classes <br></br>or<br></br> small groups</h5>
         <h5>Zoom classes</h5>
  </div>
  </NavHashLink>
  <NavHashLink to="/facials" className="current-serv">
     <div className="svg"><img src={require('./massage.png')} alt="facials"/>
          <h2>Ayurvedic Facials</h2>
         <h5>Pitta Facial</h5>
         <h5>Vata Facial</h5>
         <h5>Kapha Facial</h5>
         <h5>Anti age Facial</h5>
      </div>
     </NavHashLink>

     <NavHashLink to="/handsFeet" className="current-serv">
     <div className="svg"><img src={require('./manicure.png')} alt="mani"/> 
          <h2>Hands &amp; Feet</h2> 
         <h5>Classic Manicure</h5>
         <h5>Classic Pedicure</h5>
         <h5>Shellac Manicure</h5>
         <h5>Shellac Pedicure</h5>
     </div>
     </NavHashLink>

     <NavHashLink to="massages" className="current-serv">
      <div className="svg"><img src={require('./spa.png')} alt="massage"/> 
         <h2>Massages</h2>
         <h5>Ayurvedic Massage</h5>
         <h5>Thai Massage </h5>
         <h5>Deep Tissue Massage</h5>
         <h5>and more...</h5>
      </div>
  </NavHashLink>
  <NavHashLink to="pamper" className="current-serv">
  <div className="svg"><img src={require('./work.png')} alt="work"/> 
      <h2>Corporate &amp; Pamper Parties</h2>
     <h5>At Home &amp; Office</h5>
      <h5>Affordable</h5>
     <h5>Convenience</h5>
  </div>
  </NavHashLink>
  <section>
        <MainText/>
       </section>
 </div>
        );
      }
export default services;