import React from 'react';
import './DrawerToggleButton.css';
import Toggle from "./icons8-menu.gif";

 const drawerToggleButton = (props) => {
  
 
    return (
      <button className="toggle" onClick={props.click}>
        <img className="toggle" src={Toggle} alt="drop" />
      </button>
    );
  }


  



export default drawerToggleButton;