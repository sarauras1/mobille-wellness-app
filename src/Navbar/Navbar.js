import React from "react";
import "./Navbar.css";
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";
import logo from "./logo.png";
//import { NavLink } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";
import menus from "./menus";
import menus2 from "./menus2";

const navbar = (props) => {
  return (
    <header className="Navbar">
      <nav className="Navbar-nav">
        <div>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className="spacer2"></div>
        <div className="Nav-items">
          <ul>
            {menus.map((menu) => (
              <li key={menu.id}>
                <NavHashLink
                  to={menu.tomenu}
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
                  {menu.namemenu}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="spacer"></div>
        <div className="Nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="spacer"></div>

        <div className="Nav-items">
          <ul>
            {menus2.map((menu) => (
              <li key={menu.id}>
                <NavHashLink to={menu.tomenu} className="current">
                  {menu.namemenu}
                </NavHashLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default navbar;
