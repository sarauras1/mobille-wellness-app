import React from 'react'
import { Prompt, Alert } from "react-st-modal";
import { NavHashLink } from "react-router-hash-link";
import Button from '../Button/Button';
import axios from 'axios';
import xtype from "xtypejs";;


class Modals extends React.Component  {
  constructor(props){
  super(props) 
  this.state = {
    data: [
      { postcode: '' }
     ]
   }
 }

  async getData (){
    const res = await axios.get(
      "https://www.doogal.co.uk/GetPostcode.ashx"
    );
    if(xtype.type(res.data) === []){
      this.setState({data: res.data})
    } else {
      console.log(new Error('Something went wrong'))
      this.setState({data: []})
    }
  }
 
  componentDidMount(){
    this.getData()
  }
  render(){
  return (
    <section>
      <div>
        {this.state.data.map((d) => (
          <h5>{d.postcode}</h5>
        ))}
      </div>
      <div
        onClick={async () => {
          const area = await Prompt("Enter your post code", {
            isRequired: true,
          });

          if (area === this.setState({ data: [] })) {
            Alert("you might enter");
          } else {
            Alert("you might ever enter");
          }
        }}
      >
        <NavHashLink className="current" to="/contact">
          <Button className="button-style" id="button">
            <h3 className="button-text">BOOK NOW</h3>
          </Button>
        </NavHashLink>
      </div>
    </section>
  );
    
      }
  }

export default Modals;