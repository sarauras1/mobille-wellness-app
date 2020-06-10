import React, {useState}  from "react";
import { motion } from "framer-motion";

const  OpenWindowMani = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Manicure</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
      Luxury manicure with file or cut, cuticle work, IBX repairing and strengthening nail
       treatment, long-lasting nail polish such as Vinelux or Essie, cuticle oil and hand massage.
      <br/>
        <span className="price">From £ 25</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default OpenWindowMani;