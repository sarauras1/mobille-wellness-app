import NetlifyForm from 'react-netlify-form'
import './Contact.css'
import React from 'react'

    const contact = (props) => {

     return (
     
         <NetlifyForm
         name='Form With Invisible Recaptcha'
        recaptcha={{
        sitekey: '6LdhlaoZAAAAALRZzu5l8R97PMfsBhpuRyUbMOdf',
        size: 'invisible'
  }}
         >
         {({ loading, error, success }) => (
    <div>
      {loading &&
        <div>Loading...</div>
      }
      {error &&
        <div>Your information was not sent. Please try again later.</div>
      }
      {success &&
        <div>Thank you for contacting us!</div>
      }
      {!loading && !success &&
        <div id="contact" className="container">
          
           <h3>Book your treatments</h3>
           <p>
             <label>
               Your Name:
               <input
                 id=""
                 type="text"
                 name="Name"
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
                 name="Surname"
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
                 name="Email"
                 className="input"
               
               />
             </label>
           </p>
           <p>
             <label>
               Your phone number:{" "}
               <input
                 type="tel"
                 name="Tel"
                 id="tel"
                 className="input"
                 required
                 
               />
             </label>
           </p>
           <p>
             <label>
               Address:{" "}
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
               Select Date:{" "}
               <input
                 required
                 name="Date"
                 type="date"
                 className="input"
                 id="date"
                
               />
             </label>
           </p>
           <p>
             <label>
               Select time:{" "}
               <input
                 type="time"
                 name="Appt"
                 className="input"
                 id="appt"
                
               ></input>
             </label>
           </p>
           <p>
             <label>
               treatments to book:{" "}
               <textarea
                 className="input-textarea"
                 required
                 id="message"
                 type="message"
                 name="Message"
                 
               />
             </label>
           </p>
           <p>
             <button id="submit" className="form-button" type="submit"  >
               Submit booking
             </button>
           </p>
          }
      {/* Invisible reCAPTCHA must be kept outside of conditionals */}
      {recaptcha}
    </div>
  )}
</NetlifyForm>

     );
  }


export default contact;

