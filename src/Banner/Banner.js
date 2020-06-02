import React from 'react';
import './Banner.css';
import TextSlice from '../TextSlice/TextSlice';
import { motion } from "framer-motion";
const banner = props => {
  return( 
     
      <div className="Banner-Slicer">
        
         <div><img src={require('./bg_3.jpg')} alt="corals"/> </div>  
         <motion.div
        initial={{ opacity: 0,}}
          animate={{ opacity: 1,}}
        transition={{duration: 2}}
         >  
        <TextSlice/>
         </motion.div>
        </div>
         
    );
  };


  export default banner;