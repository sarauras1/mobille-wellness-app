import React from "react";
import "./Button.css";
import { motion } from "framer-motion";
import { NavHashLink } from "react-router-hash-link";
const button = (props) => {
  return (
    
    <div className="button">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
       <NavHashLink className="current" to="/contact">
          <div className="button-style" id="button">
            <h3 className="button-text">BOOK NOW</h3>
          </div>
        </NavHashLink>
     
      
      </motion.div>
    </div>
  );
};
export default button;