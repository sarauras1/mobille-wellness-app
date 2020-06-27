
import './Contact.css'
import { Form } from "react-form";
import React from 'react'
import axios from 'axios'



const encode = data =>
  Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

 export default class Contact extends React.Component {
   state = {
     submitted: false,
   };
   render() {
     return (
       <div className="container" id="contact">
         {this.state.submitted ? (
           <p className="thanks">
             Thanks for submitting your information! We'll be in contact with
             you as soon as possible.
           </p>
         ) : (
           <Form
             onSubmit={async (values) => {
               try {
                 await axios.post(
                   "/",
                   encode({ "form-name": "contact", ...values }),
                   {
                     headers: {
                       "Content-Type": "application/x-www-form-urlencoded",
                     },
                   }
                 );
                 this.setState({ submitted: true });
               } catch (err) {
                 window.alert(
                   "There was a problem submitting your form! Try again or reload the page :)"
                 );
                 this.setState({ submitted: true });
               }
             }}
           >
             {({ submitForm }) => (
               <div>
                 <form
                   className="myForm"
                   name="contact"
                   netlify="true"
                   netlify-honeypot="bot-field"
                   onSubmit={submitForm}
                 >
                   <h3>Book your treatments</h3>
                   <p>
                     <label>
                       Your Name:
                       <input id="name" field="text" name="name" required />
                     </label>
                   </p>
                   <p>
                     <label>
                       Your Surname:
                       <input
                         id="surname"
                         field="text"
                         name="surname"
                         required
                       />
                     </label>
                   </p>
                   <p>
                     <label>
                       Your Email:
                       <input field="email" required id="email" name="email" />
                     </label>
                   </p>
                   <p>
                     <label>
                       Your phone number:
                       <input field="tel" name="tel" id="tel" required />
                     </label>
                   </p>
                   <p>
                     <label>
                       Address:
                       <input
                         field="address"
                         name="address"
                         id="address"
                         required
                       />
                     </label>
                   </p>
                   <p>
                     <label>
                       Select Date:
                       <input required name="date" field="date" type="date" id="date" />
                     </label>
                   </p>
                   <p>
                     <label>
                       Select time:
                       <input field="time"type="time" name="appt" id="appt"/>
                     </label>
                   </p>
                   <p>
                     <label>
                       treatments to book:
                       <textarea
                         className="input-textarea"
                         required
                         id="message"
                         field="message"
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
             )}
           </Form>
         )}
       </div>
     );
   }
 }
       

   