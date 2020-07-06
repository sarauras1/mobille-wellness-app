import React, {useState}  from "react";
import { motion } from "framer-motion";

const  Deeptissue = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Deep Tissue Massage</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
     1 hour deep tissue massage is a type of massage therapy that focuses on realigning deeper layers of muscles and 
     connective tissue. It is especially helpful for chronic aches and pains and contracted areas such as stiff neck 
     and upper back, low back pain, leg muscle tightness, and sore shoulders. Some of the same strokes are used as 
     classic massage therapy, but the movement is slower and the pressure is deeper and concentrated on areas of tension 
     and pain in order to reach the sub-layer of muscles and the fascia (the connective tissue surrounding muscles).
      <br/>
        <span className="price">From £ 55 per 60 min</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default Deeptissue;