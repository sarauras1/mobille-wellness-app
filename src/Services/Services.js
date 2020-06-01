import React from 'react';
import './Services.css';

const services = props => {
        return (
          <div className="Services">
         
     <div className="svg"><img src={require('./depilation.png')} alt="waxing"/>
         <h2>Hair Removel</h2>
         <h5> Wax Hot</h5>
         <h5> Strep Wax</h5>
         <h5> Threading</h5>
      </div>
  <div className="svg"><img src={require('./excercise.png')} alt="yoga"/> 
          <h2>Hatha Yoga</h2>
         <h5>Beginners levels</h5>
         <h5>Intermediate levels</h5>
         <h5>1 to 1 classes or small groups</h5>
         <h5>zoom classes</h5>
  </div>
     <div className="svg"><img src={require('./massage.png')} alt="facials"/>
          <h2>Ayurvedic Facials</h2>
         <h5> Pitta Facial</h5>
         <h5>Vata Facial</h5>
         <h5>Kapha Facial</h5>
         <h5>Anti age Facial</h5>
      </div>
      
     <div className="svg"><img src={require('./manicure.png')} alt="mani"/> 
          <h2>Handes & Feets</h2> 
         <h5>Classic Manicure</h5>
         <h5>Classic Pedicure</h5>
         <h5>Shellac Manicure</h5>
         <h5>Shellac Pedicure</h5>
     </div>

      <div className="svg"><img src={require('./spa.png')} alt="massage"/> 
          <h2>Massages</h2>
         <h5> Ayurvedic Massage</h5>
         <h5>Thai Massage </h5>
         <h5>Deep Tissue Massage</h5>
         <h5>and more...</h5>
      </div>
    
  <div className="svg"><img src={require('./work.png')} alt="work"/> 
      <h2>Corporate & Pamper Parties</h2>
     <h5>At Home & Office</h5>
      <h5>Affordable</h5>
     <h5>Convenience</h5>
  </div>
 </div>
        );
      }
export default services;