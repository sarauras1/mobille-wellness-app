import React from 'react';
import './Backdrop.css';

  const backdrop = props => {
 
    return (
      <div>
        <div className="backdrop" onClick={props.click}/>
           
      </div>
    );
  }
 
    export default backdrop;
    