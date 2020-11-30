import React from "react";
import {NavLink} from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import './SideDrawer.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

    
   
const sideDrawer = (props) =>  {

   
      

    let drawerClasses = 'sidedrawer'
    if (props.show) {
      drawerClasses = 'sidedrawer open'
  }; 
  
    return (
      <nav className={drawerClasses}>
        <div>
          <ul className="side-list">
            <div>
              <li>
                <NavLink onClick={props.click} className="links" to="/">
                  Home
                </NavLink>
              </li>
            </div>
            <div>
              <li>
                <NavHashLink
                  onClick={props.click}
                  className="links"
                  to="/#about"
                >
                  About
                </NavHashLink>
              </li>
            </div>

            <div className="Services links">
              <DropdownMenu />
            </div>

            <div>
              <li>
                <NavLink onClick={props.click} className="links" to="/blog">
                  Blog
                </NavLink>
              </li>
            </div>
            <div>
              <li>
                <NavHashLink
                  onClick={props.click}
                  className="links"
                  to="/Contact"
                >
                  Contact
                </NavHashLink>
              </li>
            </div>
            <div>
              <li>
                <NavLink onClick={props.click} className="links" to="/gallery">
                  Gallery
                </NavLink>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }


export default sideDrawer;
