import React from 'react';
import './HandsFeet.css';
import ManiData from "./ManiData";
import Button from "../../components/Button/Button";
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";


const handsFeet = (props) => {
  return (
    <div className="service" id="handsFeet">
      <div className="service-component">
        <div className="service-image-component">
          <div className="mani-image"></div>
          
        </div>

        <div className="service-h1-div-component">
          <h1 className="service-h1-component">Hands &amp; Feet</h1>
      
          <Accordion>
            {ManiData.map((data) => (
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton style={{ border: "none" }}>
                    <h4 className="service-title">{data.name}</h4>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className="info">
                    <p className="info-p">{data.info}</p>
                    <span className="price">{data.price}</span>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            ))}
          </Accordion>

          <div class="margin-bottom"></div>
          <Button></Button>
        </div>
      </div>
    </div>
  );
}





export default handsFeet;