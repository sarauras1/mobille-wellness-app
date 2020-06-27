import React  from "react";


 var gapi = window.gapi
  // var CLIENT_ID = "205346488083-8ur1n2rm2peaanob4lmstfnt2o9pslqe.apps.googleusercontent.com"
  // var API_KEY = "AIzaSyCQGidG7MdteGpF387souo0tSCEsEdagrE"
     var CLIENT_ID = "613831671825-6g565j6pv8rovbmssu8ma21una4tlm83.apps.googleusercontent.com"
     var API_KEY = "AIzaSyDjHIB19pK0EDsakK_xeeF-xTEwJaACDsM"
  // Array of API discovery doc URLs for APIs used by the quickstart
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
   var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  
  
   

      const handleClick = () => {
        gapi.load('client:auth2',  () => {;
      
        console.log('loaded client')
      /**
       *  Initializes the API client library and sets up sign-in state
       *  listeners.
       */
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: DISCOVERY_DOCS,
          scope: SCOPES,
        })
        gapi.client.load('calendar', 'v3')
        
          gapi.auth2.getAuthInstance().signIn()
          .then(() =>  {
        
            var event = {
              'summary': 'Google I/O 2020',
              'location': 'London/Uk',
              'description': 'Book appointament',
              'start': {
                'dateTime': '2020-06-12T9:00:00-19:00',
                'timeZone': 'London/Uk'
              },
              'end': {
                'dateTime': '2020-06-12T17:00:00-07:00',
                'timeZone': 'London/Uk'
              },
              'recurrence': [
                'RRULE:FREQ=DAILY;COUNT=2'
              ],
              'attendees': [
                {'email': 'example.com'},
                {'email': 'example.com'}
              ],
              'reminders': {
                'useDefault': false,
                'overrides': [
                  {'method': 'email', 'minutes': 24 * 60},
                  {'method': 'popup', 'minutes': 10}
                ]
              }
            };

 var request = gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': event
});

   request.execute(event =>  {
  window.open(event.htmlLink);
   })
   })
  })
}




import React from "react";
import "./Contact.css";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      email: "",
      tel: "",
      address: "",
      message: "",
      date: "",
    };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        "form-name": "contact",
        ...this.state,
      }),
    })
      .then(() =>
        alert(
          "Success! Thank you for your booking! We will contact you as soon has possible time for confirmation"
        )
      )
      .catch((error) => alert(error));

    e.preventDefault();
  };

  handleChange = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

  render() {
    const {
      name,
      surname,
      email,
      tel,
      address,
      date,
      time,
      message,
    } = this.state;
    return (
      <div id="contact" className="container">
        <form
          className="myForm"
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={this.handleSubmit}
        >
          <input type="hidden" name="contact" value="contact" />
          <h3>Book your treatments</h3>
          <p>
            <label>
              Your Name:{" "}
              <input
                id=""
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Your Surname:{" "}
              <input
                id="surname"
                type="text"
                name="surname"
                value={surname}
                onChange={this.handleChange}
                required
              />
            </label>
          </p>
          <p>
            <label>
              Your Email:{" "}
              <input
                type="email"
                required
                id="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Your phone number:{" "}
              <input
                type="tel"
                name="tel"
                id="tel"
                required
                value={tel}
                onChange={this.handleChange}
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
                required
                value={address}
                onChange={this.handleChange}
              />
            </label>
          </p>
          <p>
            <label>
              Select Date:{" "}
              <input
                required
                name="date"
                type="date"
                id="date"
                onChange={this.handleChange}
                value={date}
              />
            </label>
          </p>
          <p>
            <label>
              Select time:{" "}
              <input
                type="time"
                name="appt"
                id="appt"
                onChange={this.handleChange}
                value={time}
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
                name="message"
                value={message}
                onChange={this.handleChange}
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
}

export default Contact;
