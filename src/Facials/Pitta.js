import React, {useState}  from "react";
import { motion } from "framer-motion";
import Button from '../Button/Button';

const  OpenWindow = () => {
  const [framerState, framerSetState] = useState(false);



  const framerEventHandler = () => {
    framerSetState(!framerState);
  };

   return (
    <div className="Window-Open">
    
      <motion.div >
        <div onClick={framerEventHandler}><h4>Pitta Facial for sensitive skin</h4></div>
        {framerState && <div style={{ textAlign:'center',
       width:'300px,',
       margin: 'auto',
       padding: '10px',
       boxShadow: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'}}>
       In 1980 I took part in one of the first courses on Ayurveda which was held in New Delhi.
        I decided to take part in the course because at that time I used to teach yoga and meditation. 
        The course was entitled “Pioneers of Ayurveda”. During the course we learned the deep value of 
        Ayurveda and a new way of perceiving the life on earth of human beings. It was a deep vision that
         described the connection between man and seasons, the influence of food on our health, 
        <Button/>
        </div>}
      </motion.div>
     
    </div>
  );
 }


export default OpenWindow;