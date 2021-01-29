import React from 'react';
import './Gallery.css';


const gallery = props => {

        return (
     <div className="Gallery" id="gallery">
      
          <div><img  className="first-line" src={require('./occhi.jpg')} alt="occhi"/> </div>
          <div><img  className="first-line" src={require('./french.jpg')} alt="french"/> </div>
          <div><img  className="first-line"src={require('./shellac.jpg')} alt="nails2"/> </div>

          <div><img  className="second-line"src={require('./nails-marble.jpg')} alt="Marble"/> </div>    
          <div><img  className="second-line"src={require('./allbeauty.jpg')} alt="Sara"/> </div>
          <div><img  className="second-line"src={require('./Yvonne-nails.jpg')} alt="Yvonne"/> </div>

          <div><img  className="third-line"src={require('./intu.jpg')} alt="intu-me"/> </div>       
          <div><img className="third-line"src={require('./nails3.jpg')} alt="nails3"/> </div>
          <div><img  className="third-line"src={require('./me-shaping.jpg')} alt="intu-me"/> </div>

          <div><img className="fourth-line"src={require('./massage-london.jpg')} alt="massage"/> </div>
          <div><img className="fourth-line"src={require('./nails1.jpg')} alt="nails1"/> </div>
          <div><img className="fourth-line"src={require('./mepainting.jpg')} alt="mepainting"/> </div>

          <div><img className="yoga" src={require('./yoga.jpg')} alt="yoga"/> </div>
          <div><img className="yoga" src={require('./sirsasana.jpeg')} alt="Yogasir"/> </div>    
          <div><img className="yoga" src={require('./yogaxx.jpg')} alt="Yogaxx"/> </div>    
          <div></div>
      
     </div>
        );
      }
      
export default gallery;