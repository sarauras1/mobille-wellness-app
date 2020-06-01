import React  from 'react';
import './SideDrawer.css';
import DropdownMenu from '../DropdownMenu/DropdownMenu';



const sideDrawer = props =>  {

    let drawerClasses = 'sidedrawer'
    if (props.show) {
      drawerClasses = 'sidedrawer open'
    }
     
        
return(
  <nav className={drawerClasses}>
        
           <ul className="side-list">
          <div><li><a href="Home">Home</a></li></div>
          <div> <li><a href="About me">About me</a></li></div>
         
            <div className="Services">
            
             <DropdownMenu />
            </div>
         
            <div> <li><a href="Blog">Blog</a></li></div>
            <div> <li><a href="Contact">Contact</a></li></div>
            <div> <li><a href="Coorporate">Gallery</a></li></div>
          </ul>
         
  </nav>
  );
}



export default sideDrawer;
