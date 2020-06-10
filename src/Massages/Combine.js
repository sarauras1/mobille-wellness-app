import React, {useState}  from "react";
import { motion } from "framer-motion";

const Combine = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>All Beauty By Sara Massage</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
     Combination of all Sara knowledge accumulated in the past 15 years 
     of her career taking the best from all the massage tecnique in a unique sensational massage 
     designed for all clients needs
      <br/>
        <span className="price">From £ 55</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default Combine;