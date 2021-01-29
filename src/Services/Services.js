import React from "react";
import "./Services.css";
import { NavHashLink } from "react-router-hash-link";
import MainText from "../TextSlice/MainText";
import { motion } from "framer-motion";
import Waxing from "./depilation.png";
import Yoga from "./depilation.png";
import Facials from "./massage.png";
import Massage from "./spa.png";
import Manicure from "./manicure.png";
import Pamper from "./work.png";

const services = (props) => {
  return (
    <div className="Services" id="services">
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavHashLink to="/waxing" className="current-serv">
          <div className="svg">
            <img src={Waxing} alt="waxing" />
            <h2>Hair Removal</h2>
            <h5>Hot wax</h5>
            <h5>Strip Wax</h5>
            <h5>Threading</h5>
          </div>
        </NavHashLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavHashLink to="/yoga" className="current-serv">
          <div className="svg">
            <img src={Yoga} alt="yoga" />
            <h2>Hatha Yoga</h2>
            <h5>
              One to one classes <br></br>
              or<br></br>
              small groups
            </h5>
            <h5>Zoom classes</h5>
          </div>
        </NavHashLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavHashLink to="/facials" className="current-serv">
          <div className="svg">
            <img src={Facials} alt="facials" />
            <h2>Ayurvedic Facials</h2>
            <h5>Pitta Facials</h5>
            <h5>Vata facials</h5>
            <h5>Kapha Facials</h5>
            <h5>Anti age Facials</h5>
          </div>
        </NavHashLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavHashLink to="/handsFeet" className="current-serv">
          <div className="svg">
            <img src={Manicure} alt="manicures" />
            <h2>Hands &amp; Feet</h2>
            <h5>Classic Manicure</h5>
            <h5>Classic Pedicure</h5>
            <h5>Shellac Manicure</h5>
            <h5>Shellac Pedicure</h5>
          </div>
        </NavHashLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavHashLink to="massages" className="current-serv">
          <div className="svg">
            <img src={Massage} alt="massage" />
            <h2>Massages</h2>
            <h5>Ayurvedic Massage</h5>
            <h5>Thai Massage </h5>
            <h5>Deep Tissue Massage</h5>
            <h5>and more...</h5>
          </div>
        </NavHashLink>
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
        <NavHashLink to="pamper" className="current-serv">
          <div className="svg">
            <img src={Pamper} alt="work" />
            <h2>Corporate &amp; Pamper Parties</h2>
            <h5>At Home &amp; Office</h5>
            <h5>Affordable</h5>
            <h5>Convenient</h5>
          </div>
        </NavHashLink>
      </motion.div>
      <section>
        <MainText />
      </section>
    </div>
  );
};
export default services;
