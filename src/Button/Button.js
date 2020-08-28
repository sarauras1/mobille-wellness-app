import React from 'react';
import './Button.css';
import { NavHashLink } from "react-router-hash-link";


const button = (props) => {

    return (
        <div className="button">
     <NavHashLink  to="/contact">
         <button className="button-style" id="button">
            <h3 className="button-text">BOOK NOW</h3>
        </button>
    </NavHashLink>   
          
        </div>
    );
}





export default button;