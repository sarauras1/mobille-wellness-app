import React, {useState}  from "react";
import { motion } from "framer-motion";

const  OpenWindowPedi = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Pedicure</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
     Luxury pedicure with a soak, nail cut, and file, cuticle work, callus removal, and nails ingrow removal if is needed, foot scrub and foot massage,
      IBX nails repairing and strengthening treatment, nails polish with Essie or Vinelux.
      <br/>
        <span className="price">From £ 30</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default OpenWindowPedi;