
import './Massages.css';
import React, { useState } from "react";
import Button from '../Button/Button';
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import MassagesData from './MassagesData';
 

 

 const massages = () => {
  return (
    <div className="service" id="massage">
      <div className="service-component">
        <div className="service-image-component">
          <img
            id="massage-image"
            src={require("./m.unsplash.jpg")}
            alt="massage"
          />
        </div>

        <div className="service-h1-div-component">
          <h1 className="service-h1-component">Massages</h1>
          <div className="block_1 hline-bottom"></div>

          <div className="facials-h4">
            <AnimateSharedLayout>
              <motion.div>
                {MassagesData.map((massageData) => (
                  <MassageData
                    key={massageData.id}
                    name={massageData.name}
                    info={massageData.info}
                    price={massageData.price}
                  />
                ))}
              </motion.div>
            </AnimateSharedLayout>
          </div>

          <div className="margin-bottom"></div>
        </div>
      </div>
      <Button></Button>
    </div>
  );
}
  
const MassageData = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <motion.div layout onClick={toggleOpen} >
      <motion.div className="info" layout />
      <AnimatePresence>{isOpen && <MassagesData />}</AnimatePresence>
    </motion.div>
  );
}
  


export default massages


