import React from 'react';

import ValidationForm from '../ValidationForm/ValidationForm';
import './Contact.css';

const contact = props => {
  return (
      <div className="Contact" id="contact">
          <div id="Form">
        
          <ValidationForm/>
          </div>
      </div>
  )
}



export default contact;