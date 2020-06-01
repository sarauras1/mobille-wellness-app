import React from 'react';
import './Navbar.css';
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton';
import logo from './logo.png'; 
import { BrowserRouter, NavLink } from 'react-router-dom';


const navbar = props => {
    return (
    
  <header className="Navbar">
      <BrowserRouter>
  <nav className="Navbar-nav">
     <div>
         <DrawerToggleButton click={props.drawerClickHandler}/>
    </div>
    <div className="spacer2"></div>
<div className="Nav-items">
 <ul>
    <li><NavLink to="/Banner/Services/About"  className="current">Home</NavLink></li>
    <li><NavLink to="/Services" className="current">Services</NavLink></li>
    <li><NavLink to="/About" 
    isActive={(match, location) => {
      if (!match) {
        return false;
      }
  
      // only consider an event active if its event id is an odd number
      const eventID = parseInt(match.params.eventID);
      return !isNaN(eventID) && eventID % 2 === 1;
    }}
     className="current">About</NavLink></li>
</ul>

</div>
    <div className="spacer"></div>
    <div className="Nav-logo"><img src={logo} alt="logo"/></div>
    <div className="spacer"></div>

<div className="Nav-items">
  <ul>
      <li><NavLink to="/Blog" className="current">Blog</NavLink></li>
     <li><NavLink to="/Gallery" className="current">Gallery</NavLink></li>
    <li><NavLink to="/Contact" className="current">Contact</NavLink></li>   
</ul>

</div>
  </nav>
  </BrowserRouter>
</header>
    );
  }
 
 

 


export default navbar;