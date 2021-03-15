import React from "react";
import "./Services.css";
import { NavHashLink } from "react-router-hash-link";
import { motion } from "framer-motion";
import MainText from "../TextSlice/MainText";

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      services: [
        {
          id: 1,
          to: "/facials",
          img: "./images/massage.png",
          alt: "Facials",
          title: "Ayurvedic facials",
          text01: "Pitta facials",
          text02: "Vata facials",
          text03: "Kapha facials",
          text04: "Anti age facials",
        },
        {
          id: 2,
          to: "/massages",
          img: "./images/spa.png",
          alt: "Spa massages",
          title: "Massages",
          text01: "Ayurvedic massage",
          text02: "Thai Massage",
          text03: "Deep Tissue Massage",
          text04: "and more...",
        },
        {
          id: 3,
          to: "/handsFeet",
          img: "./images/manicure.png",
          alt: "Perfect manicures",
          title: "Hands & Feet",
          text01: "Classic manicure",
          text02: "Classic pedicure",
          text03: "Shellac manicure",
          text04: "Shellac pedicure",
        },
        {
          id: 4,
          to: "/waxing",
          img: "./images/depilation.png",
          alt: "waxing",
          title: "Hair Removal",
          text01: "Hot wax",
          text02: "Strip wax",
          text03: "Treading",
        },
        {
          id: 5,

          to: "/pamper",
          img: "./images/lotus.png",
          alt: "Pamper Parties",
          title: "Corporate & Pamper Parties",
          text01: "At Home and Office",
          text02: "Affordable",
          text03: "Conveniente",
        },
        {
          id: 6,
          to: "/yoga",
          img: "./images/excercise.png",
          alt: "Yoga",
          title: "Hata Yoga",
          text01: "One to one classes",
          text02: "small groups classes",
          text03: "zoom classes",
        },
      ],
    };
  }
  render() {
    return (
      <div className="Services" id="services">
        {this.state.services.map((data) => (
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            <NavHashLink to={data.to} className="current-serv">
              <div
                className="svg"
                key={data.id}
                data-aos="fade-up"
            data-aos-duration="1600"
              >
                <img src={data.img} alt={data.alt} />

                <h2 className="service-h2">{data.title}</h2>
                <h5 className="service-h5">
                  {data.text01} <br />
                  {data.text02} <br />
                  {data.text03} <br />
                  {data.text04} <br />
                </h5>
              </div>
            </NavHashLink>
          </motion.div>
        ))}
        <section>
          <MainText />
        </section>
      </div>
    );
  }
}

export default Services;