import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import servicesmenu from "../servicesmenu";
import Facebook from "./facebook.png";
import Gmail from "./gmail.png";
import Instagram from "./instagram.png";

const footer = (props) => {
  return (
    <div className="footer">
      <div id="container">
        <div className="left">
          <h3 className="footer-title-1">Services</h3>
          {servicesmenu.map((menu) => (
            <li key={menu.id}>
              <NavLink className="current-footer" to={menu.tomenu}>
                {menu.namemenu}
              </NavLink>
            </li>
          ))}
        </div>
        <div className="center">
          <h3 className="footer-title-2">Socials</h3>
          <li>London UK </li>

          <li>
            <a href="mailto:allbeautybysara@gmail.com">
              <img className="socials" src={Gmail} alt="email" />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/allbeautybysara/">
              <img className="socials" src={Instagram} alt="instagram" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/sara.allbeauty.3">
              <img className="socials" src={Facebook} alt="facebook" />{" "}
            </a>
          </li>
        </div>
        <div className="right">
          <h3 className="footer-title-3">Let's get in touch!</h3>
          <p>
            Thank you for choosing All Beauty By Sara in London, England! Please
            send me an email or WhatsApp me for enquiries about my services. I
            will respond to you at the soonest possible time.
          </p>
        </div>
      </div>
      <div className="hline-bottom-footer"></div>
      {/* <NavLink to="/privacy" className="current-footer">
        <li id="privacy-li">Privacy Policy</li>
      </NavLink> */}
      <div className="copiright">
        <small>&copy; All Rights reserved by SaraWebDev</small>
      </div>
    </div>
  );
};

export default footer;
