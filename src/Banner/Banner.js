import React from 'react';
import './Banner.css';
import TextSlice from '../TextSlice/TextSlice';
import { motion } from "framer-motion";
const banner = props => {
  return( 
     
      <div className="Banner-Slicer">
        
         <div><img src={require('./bg_3.jpg')} alt="corals"/> </div>  
         <motion.div
        initial={{ width: 0,
            x: 200,
             y: 200}}
          animate={{ width: 400,
          x: 0,
          y: 0}}
        transition={{duration: 1}}
         >  
        <TextSlice/>
         </motion.div>
        </div>
         
    );
  };


  export default banner;