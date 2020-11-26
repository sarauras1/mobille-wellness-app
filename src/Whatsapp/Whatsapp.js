import React from 'react';
import Whatsapp from "./whatsapp-img.webp";
import './Whatsapp.css';
import Popover from 'react-simple-popover';

class Whats extends React.Component{
  constructor(props) {
    super(props);

     this.state = {
      show: false
    };

  }

 
  handleHover = (e) => {
   this.setState({show: !this.state.show});
  }


  render() {
  
 return (
   <div>
     <a href="https://api.whatsapp.com/send?phone=+447413140617">
       <img
         ref={(node) => {
           this.target = node;
         }}
         onMouseOver={this.handleHover}
         className="whatsapp"
         alt="whatsapp"
         src={Whatsapp}
       />
       <Popover
         target={this.refs.target}
         show={this.state.show}>
         <p className="popover speech">How may i help you?</p>
       </Popover>
     </a>
   </div>
 );      
  };
 };


  export default Whats;