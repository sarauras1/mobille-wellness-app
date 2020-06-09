import React, {useState}  from "react";
import { motion } from "framer-motion";


const  OpenWindowAge = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Anti Age Facial for a younger skin</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
     The repulsing and reshaping action redefines the face contour. 
     Skin is correctly and deeply moisturised and is progressively restructured. 
     Skin becomes radiant and visibly younger looking; it appears revitalised,
      fresher and more toned with a clear reduction of signs of tiredness and loss of tone.
      <br/>
        <span className="price">From £ 45</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default OpenWindowAge;