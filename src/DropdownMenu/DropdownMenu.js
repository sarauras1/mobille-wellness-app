import './DropdownMenu.css';
import React, { Component } from 'react';

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
        <li><a href="Services">Services</a></li> 
               
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
           <li><a href="Hands & feet">Hands & Feet</a></li>
           <li><a href="Facials">Facials</a></li>
           <li><a href="Contact">Hair Removal</a></li>
           <li><a href="Corporate">Corporate & Pamper Parties</a></li>
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