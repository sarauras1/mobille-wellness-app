import React, {useState}  from "react";
import { motion } from "framer-motion";

const  Ayurveda = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Ayurvedic Marma Massage</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
    Marma therapy is an ancient Indian practice whose focus is the manipulation of subtle energy 
    (prana) in the body for the purposes of supporting the healing process. Marma therapy is based on the utilization of 107 points in the body which are considered to be access points to body, mind, and consciousness. Knowledge of Marma allows the practitioner to influence the flow of prana through both the gross and subtle bodies for the purposes of restoring health and peace of mind.
      <br/>
        <span className="price">From £ 45</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default Ayurveda;