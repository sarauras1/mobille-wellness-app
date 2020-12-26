import React from 'react';
import './DrawerToggleButton.css';


 const drawerToggleButton = (props) => {
  
 
    return (
      <button className="toggle" onClick={props.click}>
        <img className="toggle" src={require("./icons8-menu.gif")} alt="drop" />
      </button>
    );
  }


  



export default drawerToggleButton;