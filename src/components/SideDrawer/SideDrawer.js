import React from "react";
import { NavHashLink } from "react-router-hash-link";
import "./SideDrawer.css";
import Collapsible from "react-collapsible";
import { NavLink } from "react-router-dom";
import menus from "../../menus";
import servicesmenu from "../../servicesmenu";

const sideDrawer = (props) => {
  let drawerClasses = "sidedrawer";
  if (props.show) {
    drawerClasses = "sidedrawer open";
  }

  return (
    <nav className={drawerClasses}>
      <div>
        <ul className="side-list">
          <div>
            {menus.map((menu) => (
              <li key={menu.id}>
                <NavHashLink
                  to={menu.tomenu}
                  onClick={props.click}
                  className="links"
                  isActive={(match, location) => {
                    if (!match) {
                      return false;
                    }

                    // only consider an event active if its event id is an odd number
                    const eventID = parseInt(match.params.eventID);
                    return !isNaN(eventID) && eventID % 2 === 1;
                  }}
                >
                  {menu.namemenu}
                </NavHashLink>
              </li>
            ))}
          </div>

          <div className="Services links">
            <Collapsible trigger="Services">
              <ul className="dropdown">
                {servicesmenu.map((menu) => (
                  <li key={menu.id}>
                    <NavLink
                      to={menu.tomenu}
                      onClick={props.click}
                      className="links"
                    >
                      {menu.namemenu}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </Collapsible>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default sideDrawer;
