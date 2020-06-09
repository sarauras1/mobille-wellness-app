import React, {useState}  from "react";
import { motion } from "framer-motion";


const  Kapha = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Kapha Facial for oily skin and combination</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
    Skin appears smooth and healthy with a flawless and radiant complexion. The unpleasant shiny effect is eliminated.
     Production of sebum by oily and impure skin is normalised and the skin is less prone to irritations; the products also have an antibacterial effect. Tests have shown a 58% reduction in the production of sebum. Skin becomes flawless and purer with a finer and more homogeneous texture. 
    Antiseptic active principles of vegetable origin actively act against impurities and comedones.<br/>
        <span className="price">From £ 45</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }

 export default Kapha;