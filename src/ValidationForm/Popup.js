import Popup from "reactjs-popup";
import React from 'react';
const popup = () => (
  <Popup trigger={<button>Submit Booking</button>} position="right center">
    <div>Thanks for your booking request, I will contact you as soon as possible time to confirm!</div>
  </Popup>
);

export default popup;