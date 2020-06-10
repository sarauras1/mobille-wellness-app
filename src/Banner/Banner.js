import React from 'react';
import TextSlice from '../TextSlice/TextSlice';
import './Banner.css';




const banner = (props) => {
  return( 
     
      <div className="Banner-Slicer">
        
    <div><img src={require('./bg_3.jpg')} alt="corals"/> </div>  
   
     <TextSlice/>

        </div>
         
    );
  };


  export default banner;


