
import './Contact.css'
import { Form, Text } from "react-form";
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
           <h1 className="thanks">
             Thanks for submitting your Booking! We'll be in contact with you as
             soon as possible to confirm.
           </h1>
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
                   <div
                     style={{
                       height: 0,
                       overflow: "hidden",
                     }}
                   >
                     <Text field="bot-field" name="bot-field" />
                   </div>
                   <p>
                     <label>
                       Your Name:
                       <input
                         className="input"
                         id="name"
                         field="text"
                         name="name"
                         required
                       />
                     </label>
                   </p>

                   <p>
                     <label>
                       Your Surname:
                       <input
                         className="input"
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
                       <input
                         className="input"
                         field="email"
                         required
                         id="email"
                         name="email"
                       />
                     </label>
                   </p>
                   <p>
                     <label>
                       Your phone number:
                       <input
                         className="input"
                         field="tel"
                         name="tel"
                         id="tel"
                         required
                       />
                     </label>
                   </p>
                   <p>
                     <label>
                       Address:
                       <input
                         className="input"
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
                       <input
                         className="input"
                         required
                         name="date"
                         field="date"
                         type="date"
                         id="date"
                       />
                     </label>
                   </p>
                   <p>
                     <label>
                       Select time:
                       <input
                         className="input"
                         field="time"
                         type="time"
                         name="appt"
                         id="appt"
                       />
                     </label>
                   </p>
                   <p>
                     <label>
                       treatments to book:
                       <textArea
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
       

   