import React from 'react'
import './Massages.css'

const info = (props) => {
      const handleClick = (e) => {
        e.preventDefault();
    
 
      }
  return (
    <div>
      <h4 className="facial-h4">{props.name}</h4>
      <div
              style={{
          display:"none",
          textAlign: "center",
          width: "300px,",
          margin: "auto",
          padding: "10px",
          boxShadow:
            "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
        }}
        onClick={handleClick}
        className="info"
      >
        <p className="drop.para">{props.info}</p>
        <span className="price">{props.price}</span>
      </div>
    </div>
  );
}

export default info;
