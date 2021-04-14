import React from 'react';
import './DrawerToggleButton.css';


 const drawerToggleButton = (props) => {
  
 
    return (
      <button className="toggle" onClick={props.click}>
        <i class="material-icons">&#xe5d2;</i>
      </button>
    );
  }


  



export default drawerToggleButton;