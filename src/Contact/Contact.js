import NetlifyForm from 'react-netlify-form'
import './Contact.css'
import React from 'react'

    const contact = (props) => {

     return (
       <div id="contact"  className="container">
         <NetlifyForm
        method="POST"  
        netlify-honeypot="bot-field"
        data-netlify="true"
        name="contact" 
        recaptcha={{
        sitekey: '6LdhlaoZAAAAALRZzu5l8R97PMfsBhpuRyUbMOdf',
        size: 'invisible'
        }}
         >
     {({ loading, error, recaptchaError, success, recaptcha }) => (
    <div>
      {loading &&
        <div>Loading...</div>
      }
      {error &&
        <div>Your information was not sent. Please try again later.</div>
      }
      {recaptchaError &&
        <div>Recaptcha did not match. Please make sure the box is checked.</div>
      }
      {success &&
        <div>Thank you for contacting us!</div>
      }
      {!loading && !success &&
      
         <div className="myForm">
           <h3>Book your treatments</h3>
            <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
        </p>
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
               Your phone number:
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
                 name="Date"
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
                 name="Appt"
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
                 name="Message"
                 
               />
             </label>
           </p>
           <p>
             <button id="submit" className="form-button" type="submit"  >
               Submit booking
             </button>
           </p>
        </div>
      }
      {/* Invisible reCAPTCHA must be kept outside of conditionals */}
      {recaptcha}
    </div>
  )}
</NetlifyForm>
 </div>
    );
  }


export default contact;

