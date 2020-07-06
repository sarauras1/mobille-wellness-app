import React, {useState}  from "react";
import { motion } from "framer-motion";

const  Relaxing = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Relaxing</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
     1 hour full-body treatment involving soft music, soft lighting and aromatherapy oils. You will have a long, luxurious 
     massage which will use all kinds of techniques including long slow movements, gentle kneading and rolling of skin and muscle, and perhaps some rhythmic rocking from side to side. It is a passive treatment. You probably won't be stretched or 
     manoeuvred into any yoga-like positions, as you are, for example, in Thai massage. You just lie there and take it.
      <br/>
        <span className="price">From £ 45 per 45 min</span>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default Relaxing;