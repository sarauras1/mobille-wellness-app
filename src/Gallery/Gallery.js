import React from 'react';
import './Gallery.css';


const gallery = props => {

        return (
     <div className="Gallery" id="gallery">
           
          <div><img src={require('./occhi.jpg')} alt="occhi"/> </div>
          <div><img src={require('./french.jpg')} alt="french"/> </div>
          <div><img src={require('./shellac.jpg')} alt="nails2"/> </div>
          <div><img src={require('./nails-marble.jpg')} alt="Marble"/> </div>    
          <div><img src={require('./allbeauty.jpg')} alt="Sara"/> </div>
          <div><img src={require('./Yvonne-nails.jpg')} alt="Yvonne"/> </div>
          <div><img src={require('./intu.jpg')} alt="intu-me"/> </div>       
          <div><img src={require('./nails3.jpg')} alt="nails3"/> </div>
          <div><img src={require('./me-shaping.jpg')} alt="intu-me"/> </div>
          <div><img src={require('./nails1.jpg')} alt="nails1"/> </div>
          <div><img src={require('./nails2.jpg')} alt="nails2"/> </div>
          <div><img src={require('./mepainting.jpg')} alt="mepainting"/> </div>
          <div><img className="yoga" src={require('./yoga.jpg')} alt="yoga"/> </div>
          <div><img className="yoga" src={require('./sirsasana.jpeg')} alt="Yogasir"/> </div>    
          <div><img className="yoga" src={require('./yogaxx.jpg')} alt="Yogaxx"/> </div>    
         
         
     </div>
        );
      }
      
export default gallery;