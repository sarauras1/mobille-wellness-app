import React, {useState}  from "react";
import { motion } from "framer-motion";

const Swedish = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Swedish Massage</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
   Swedish massage It involves the use of hands, forearms or elbows to manipulate the superficial layers
   of the muscles to improve mental and physical health. Active or passive movement of the joints may also be 
   part of the massage. The benefits of Swedish massage include increased blood circulation,
   mental and physical relaxation, decreased stress and muscle tension, and improved range of motion.
      <br/>
        <span className="price">From £ 50 per 60 min</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default Swedish;