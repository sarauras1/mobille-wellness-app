import React from 'react';
import './Gallery.css';
import Brows from "./occhi.jpg";
import Manicure from "./french.jpg";
import Shellac from "./shellac.jpg";
import NailsMarble from "./nails-marble.jpg";
import AllBeautyBySara from "./allbeauty.jpg";
import ShellacRomantique from "./Yvonne-nails.jpg";
import Corporate from "./intu.jpg";
import Nails from './nails3.jpg';
import CorporateIntu from './me-shaping.jpg';
import Massage from './massage-london.jpg';
import NailsManicure from './nails1.jpg';
import PerfectNails from './mepainting.jpg';
import Yoga from './yoga.jpg';
import Sirsasana from './sirsasana.jpeg';
import Yogax from './yogaxx.jpg';
const gallery = props => {

        return (
     <div className="Gallery" id="gallery">
     
          <div><img  className="first-line" src={Brows} alt="brows"/> </div>
          <div><img  className="first-line" src={Manicure} alt="frenchManicure"/> </div>
          <div><img  className="first-line"src={Shellac} alt="shellac"/> </div>

          <div><img  className="second-line"src={NailsMarble} alt="Marble"/> </div>    
          <div><img  className="second-line"src={AllBeautyBySara} alt="Sara"/> </div>
          <div><img  className="second-line"src={ShellacRomantique} alt="Romantique"/> </div>

          <div><img  className="third-line"src={Corporate} alt="intu-corporate"/> </div>       
          <div><img className="third-line"src={Nails} alt="Nails"/> </div>
          <div><img  className="third-line"src={CorporateIntu} alt="intu-corporate"/> </div>

          <div><img className="fourth-line"src={Massage} alt="massage"/> </div>
          <div><img className="fourth-line"src={NailsManicure} alt="nailsManicure"/> </div>
          <div><img className="fourth-line"src={PerfectNails} alt="NailsPainting"/> </div>

          <div><img className="yoga" src={Yoga} alt="yoga"/> </div>
          <div><img className="yoga" src={Sirsasana} alt="sirsasana"/> </div>    
          <div><img className="yoga" src={Yogax} alt="Yogaxx"/> </div>    
          <div></div>
      
     </div>
        );
      }
      
export default gallery;