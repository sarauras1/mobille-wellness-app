import React from "react";
import "./Massages.css";

import MassagesData from "./MassagesData";
import Button from "../Button/Button";
   import {
     Accordion,
     AccordionItem,
     AccordionItemButton,
     AccordionItemHeading,
     AccordionItemPanel,
   } from "react-accessible-accordion";

const massages = (props) => {
  return (
    <div className="service-component" id="massage">
      <div className="service-image-component">
        <div className="massage-image">
      </div>
     </div>
      <div className="service-h1-div-component">
        <h1 className="service-h1-component">Massages</h1>

        <Accordion>
          {MassagesData.map((data) => (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton style={{ border:'none'}}>
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

       
        <Button />
        <div className="margin-bottom"></div>
      </div>
    </div>
  );
};

export default massages;
