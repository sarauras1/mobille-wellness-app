import React from 'react';
import TextSlice from '../TextSlice/TextSlice';
import './Banner.css';




const Banner = (props) => {
  return( 
     
      <div className="Banner-Slicer">
        
    <div><img src={require('./bg_2.jpg')} alt="corals"/> </div>  
   
     <TextSlice/>

        </div>
         
    );
  };


  export default Banner;


