import React  from 'react';
import {NavLink} from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import './SideDrawer.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';


const sideDrawer = props =>  {

    let drawerClasses = 'sidedrawer'
    if (props.show) {
      drawerClasses = 'sidedrawer open'
    }
     
        
return(
  <nav className={drawerClasses}>
        
           <ul onClick={props.click} className="side-list">
         
          <div><li><NavLink to="/">Home</NavLink></li></div>
          <div> <li><NavHashLink to="/about">About</NavHashLink></li></div>
         
            <div className="Services">
             <DropdownMenu />
            </div>
         
            <div> <li><NavHashLink to="/blog">Blog</NavHashLink></li></div>
            <div> <li><NavHashLink to="/contact">Contact</NavHashLink></li></div>
            <div> <li><NavLink to="/gallery">Gallery</NavLink></li></div>
          </ul>
       
  </nav>
  );
}



export default sideDrawer;
