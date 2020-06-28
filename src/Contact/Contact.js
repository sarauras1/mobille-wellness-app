
import './Contact.css'
import React from 'react'
import React, { useState } from "react";


  
const contact = (props) => {
  const [name, setName] = useState("");

  // This function puts all the form fields into a FormData constructor, which we later encode with the URLSearchParams constructor
  const createFormDataObj = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }
  
  const handleSubmit = (e) => {
    // This `data` object is what's passed to the createFormDataObj. It needs all of your form fields, where the key is the name= attribute and the value is the value=
    const data = { 
      "form-name": "contact",
      "name": name
    }
    // This POSTs your encoded form to Netlify with the required headers (for text; headers will be different for POSTing a file) and, on success, redirects to the custom success page using Gatsby's `navigate` helper function that we imported at the top
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(createFormDataObj(data)).toString()
    })
      .then(() => navigate("/Thank-you/"))
      .catch(error => alert(error));
    // This is required to prevent the default onSubmit behavior
    e.preventDefault();
  };

     return (
       <div id="contact" className="container">
         <form
          onSubmit={handleSubmit}
          action="/"
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
                  value={name}
                  onChange={e => setName(e.target.value)}
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
                   value={surname}
                  onChange={e => setName(e.target.value)}
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
                   value={email}
                  onChange={e => setName(e.target.value)}
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
                   value={tel}
                 onChange={e => setName(e.target.value)}
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
                   value={address}
                  onChange={e => setName(e.target.value)}
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
                   value={date}
                  onChange={e => setName(e.target.value)}
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
                   value={time}
                  onChange={e => setName(e.target.value)}
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
                  value={message}
                  onChange={e => setName(e.target.value)}
               />
             </label>
           </p>
           <p>
             <button id="submit" className="form-button" type="submit"  value={submit} >
               Submit booking
             </button>
           </p>
         </form>
       </div>
     );
  }


export default contact;

