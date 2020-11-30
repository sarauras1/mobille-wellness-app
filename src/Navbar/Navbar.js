import React from 'react';
import './Navbar.css';
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import logo from './logo.png'; 
import { NavLink } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";


   const navbar = props => {
    return (
      <header className="Navbar">
        <nav className="Navbar-nav">
          <div>
           
             <DrawerToggleButton click={props.drawerClickHandler}/>
      
          </div>
          <div className="spacer2"></div>
          <div className="Nav-items">
            <ul>
              <li>
                <NavLink to="/" className="current">
                  Home
                </NavLink>
              </li>
              <li>
                <NavHashLink to="/services" className="current">
                  Services
                </NavHashLink>
              </li>
              <li>
                <NavHashLink
                  to="/#about"
                  isActive={(match, location) => {
                    if (!match) {
                      return false;
                    }

                    // only consider an event active if its event id is an odd number
                    const eventID = parseInt(match.params.eventID);
                    return !isNaN(eventID) && eventID % 2 === 1;
                  }}
                  className="current"
                >
                  About
                </NavHashLink>
              </li>
            </ul>
          </div>
          <div className="spacer"></div>
          <div className="Nav-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="spacer"></div>

          <div className="Nav-items">
            <ul>
              <li>
                <NavLink to="/blog" className="current">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/gallery" className="current">
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavHashLink to="/Contact" className="current">
                  Contact
                </NavHashLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }


 


export default navbar;