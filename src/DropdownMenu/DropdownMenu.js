import './DropdownMenu.css';
import React, { Component } from 'react';
import { NavHashLink } from "react-router-hash-link";

class DropdownMenu extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        
        <div onClick={this.showMenu}className="dropdownServices">
        <li><NavHashLink to="/#services">Services</NavHashLink></li> 
               
         <img src={require('./drop.png')} alt="drop"/>
        </div> 
      
        
        {
          this.state.showMenu
            ? (
              <div
                className="menu"
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
        <ul className="dropdown">
           <li><a href="Yoga">Yoga</a></li>
           <li>< a href="Massage">Massage </a></li>
           <li><a href="Hands &amp; feet">Hands &amp; Feet</a></li>
           <li><a href="Facials">Facials</a></li>
           <li><a href="Contact">Hair Removal</a></li>
           <li><a href="Corporate">Corporate &amp; Pamper Parties</a></li>
        </ul>    
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}
export default DropdownMenu;