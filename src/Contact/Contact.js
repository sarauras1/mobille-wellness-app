import React from 'react';

import GoogleApi from '../GoogleApi/GoogleApi';
import './Contact.css';

const contact = props => {
  return (
      <div className="Contact" id="contact">
          <div id="Form">
        
          <GoogleApi/>
          </div>
      </div>
  )
}



export default contact;