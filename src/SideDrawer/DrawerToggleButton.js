import React from 'react';
import './DrawerToggleButton.css';


 const drawerToggleButton = (props) => {
  
 
    return (
      <button className="toggle" onClick={props.click}>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
        <div className="toggle-line"></div>
      </button>
    );
  }


  



export default drawerToggleButton;