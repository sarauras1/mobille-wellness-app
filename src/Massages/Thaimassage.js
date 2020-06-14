import React, {useState}  from "react";
import { motion } from "framer-motion";

const  Thaimassage = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Thai Massage</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
     1 hour of Traditional Thai massage is an ancient healing system that combines broad and targeted acupressure, 
     stimulation and manipulation of energy lines called sen, and assisted yoga postures. Treatment effects are 
     enhanced when the patient is fully relaxed and breathing deeply. This traditional healing practice, called nuad 
     or nuad boran in the Thai language, 
     stands in sharp contrast to western massage therapies.
      <br/>
        <span className="price">From £ 50</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default Thaimassage;