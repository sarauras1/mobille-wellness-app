import React, {useState}  from "react";
import { motion } from "framer-motion";

const  Relaxing = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Relaxing</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
     
      <br/>
        <span className="price">From £ 45</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default Relaxing;