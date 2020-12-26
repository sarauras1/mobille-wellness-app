import React from "react";
import {NavLink} from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import './SideDrawer.css';
import Collapsible from "react-collapsible";
    
   
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
              <img className="drop-img" src={require("./drop.png")} alt="drop" />
              <Collapsible trigger="Services">
                <ul className="dropdown">
                  <li>
                    <NavHashLink
                      onClick={props.click}
                      to="yoga"
                      className="current"
                    >
                      Yoga
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink
                      to="massages"
                      className="current"
                      onClick={props.click}
                    >
                      Massage
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink
                      onClick={props.click}
                      to="handsFeet"
                      className="current"
                    >
                      Hands &amp; Feet
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink
                      to="facials"
                      className="current"
                      onClick={props.click}
                    >
                      Facials
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink
                      to="waxing"
                      className="current"
                      onClick={props.click}
                    >
                      Hair Removal
                    </NavHashLink>
                  </li>
                  <li>
                    <NavHashLink
                      to="pamper"
                      className="current"
                      onClick={props.click}
                    >
                      Corporate &amp; Pamper Parties
                    </NavHashLink>
                  </li>
                </ul>
              </Collapsible>
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
