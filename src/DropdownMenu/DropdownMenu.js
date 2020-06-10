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
           <li><NavHashLink to="yoga" className="current">Yoga</NavHashLink></li>
           <li><NavHashLink to="massages" className="current">Massage </NavHashLink></li>
           <li><NavHashLink to="handsFeet" className="current" >Hands &amp; Feet</NavHashLink></li>
           <li><NavHashLink to="facials" className="current">Facials</NavHashLink></li>
           <li><NavHashLink to="waxing" className="current">Hair Removal</NavHashLink></li>
           <li><NavHashLink to="pamper" className="current">Corporate &amp; Pamper Parties</NavHashLink></li>
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