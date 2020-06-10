import React from 'react';
import './TextSlice.css';
import { motion } from "framer-motion";


const textSlice = props => {
 
      
 return (
  <div  className="top-left">
<motion.div 
  
  transition={{duration: 0.5}} 
  initial={{ opacity: 0 }}
  animate={{ opacity: 1,
  }}
>
<h1 id="top-left-h1">MOBILE WELLNESS</h1>
</motion.div>
   

    

 </div>
    );
  };


  export default textSlice;