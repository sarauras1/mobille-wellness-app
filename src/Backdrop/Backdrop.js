import React from 'react';
import './Backdrop.css';

  const backdrop = props => {
 

  
    return (
      <div>
        <div className="backdrop" onClick={props.click}>
          <img
            className="backdrop-img"
            onClick={props.click}
            src={require("./gtk_close.png")}
            alt="img"
          />
        </div>
        <div className="backdrop2" onClick={props.click}></div>
       
      </div>
    );
  }
 
    export default backdrop;
    