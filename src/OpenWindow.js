import React, {useState}  from "react";
import { motion } from "framer-motion";


const  OpenWindow = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div drag>
        <div className="block_1 hline-bottom" onClick={framerEventHandler}></div>
        {framerState && <div className="window-drop"></div>}
      </motion.div>
    </div>
  );
 }


export default OpenWindow;