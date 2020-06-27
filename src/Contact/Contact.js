
import './Contact.css'
import React from 'react'




const contact = () => {
     return (
       <div id="contact" className="container">
         <form
          action="/Thank you for your booking will will contact 
           you as soon as possible time to confirm"
           className="myForm"
           name="contact"
           method="post"
           data-netlify="true"
           data-netlify-honeypot="bot-field"
         >
           <input type="hidden" name="contact" value="contact" />
           <h3>Book your treatments</h3>
           <p>
             <label>
               Your Name:
               <input
                 id=""
                 type="text"
                 name="name"
                 className="input"
                 required
               />
             </label>
           </p>
           <p>
             <label>
               Your Surname:
               <input
                 id="surname"
                 type="text"
                 name="surname"
                 className="input"
                 required
               />
             </label>
           </p>
           <p>
             <label>
               Your Email:
               <input
                 type="email"
                 required
                 id="email"
                 name="email"
                 className="input"
               />
             </label>
           </p>
           <p>
             <label>
               Your phone number:
               <input
                 type="tel"
                 name="tel"
                 id="tel"
                 className="input"
                 required
               />
             </label>
           </p>
           <p>
             <label>
               Address:
               <input
                 type="address"
                 name="address"
                 id="address"
                 className="input"
                 required
               />
             </label>
           </p>
           <p>
             <label>
               Select Date:
               <input
                 required
                 name="date"
                 type="date"
                 className="input"
                 id="date"
               />
             </label>
           </p>
           <p>
             <label>
               Select time:
               <input
                 type="time"
                 name="appt"
                 className="input"
                 id="appt"
               ></input>
             </label>
           </p>
           <p>
             <label>
               treatments to book:
               <textarea
                 className="input-textarea"
                 required
                 id="message"
                 type="message"
                 name="message"
               />
             </label>
           </p>
           <p>
             <button id="submit" className="form-button" type="submit">
               Submit booking
             </button>
           </p>
         </form>
       </div>
     );
  }


export default contact;

