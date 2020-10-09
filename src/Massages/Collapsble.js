import Collapsible from "react-collapsible";
import React from 'react';
import MassagesData from './MassagesData';

const collapsble = (props) => {
return(
    <div>
        {MassagesData.map((data) => (
            <Collapsible trigger={data.name} className="massage-h4">
                <div className="info-services">
                    <p>{data.info}</p>
                    <span className="price">{data.price}</span>
                </div>
            </Collapsible>
        ))}
        
  </div>
)}


export default collapsble;

//componet not used at the moment 