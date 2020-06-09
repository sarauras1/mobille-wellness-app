import React from 'react';
import TextSlice from '../TextSlice/TextSlice';
import './Banner.css';
import { motion } from "framer-motion";



const banner = (props) => {
  return( 
     
      <div className="Banner-Slicer">
        
    <div><img src={require('./bg_3.jpg')} alt="corals"/> </div>  
    <motion.text
  size={ "100%" }
  background={ "" }
  style={{
    fontFamily: "Montserrat, Work Sans, sans-serif",
    fontWeight: "bold",
    letterSpacing: "-0.04em",
    fontSize: 26,
    color: "#FFF",
  }}
  initial={{ y: 26 * 1.2 }}
  animate={{ y: 0 }}
>
<TextSlice/>
   
</motion.text>
     
        </div>
         
    );
  };


  export default banner;


