import React from 'react';
import './TextSlice.css';


const mainText = props => {
 
      
 return (
   <div
     className="main-text"
     data-aos="fade-up"
     data-aos-offset="20"
     data-aos-delay="50"
     data-aos-duration="2000"
     data-aos-easing="ease"
     data-aos-mirror="true"
     data-aos-once="false"
     data-aos-anchor-placement="top-center"
   >
     <h1 className="service-h1-component">Enjoy Hassle-Free Beauty Services</h1>
     <p className="info-p2">
       Treat yourself to a rewarding makeover without needing to leave your home
       or your place of work! All Beauty By Sara has you covered! I am Sara
       Uras, a business owner and a highly experience professional. I provide a
       full range of luxurious beauty services such as WAXING, NAILS, MASSAGE,
       FACIALS, YOGA and more...to clients around London, England.
     </p>
     <p />
     <h3> Why Choose My Services?</h3>
     <p className="info-p1">
       {" "}
       Fully qualified beauty therapist since 2007. 
       Moreover, my spotless equipment and mono use set my
       business apart from most beauty service providers. I offer bespoke
       treatments and use only carefully chosen products to ensure the best
       results.
     </p>
   </div>
 );
  };


  export default mainText;