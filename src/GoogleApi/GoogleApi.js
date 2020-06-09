import React  from "react";
import ValidationForm from '../ValidationForm/ValidationForm';

  const gapi = window.gapi
  const CLIENT_ID = "310448971431-kd1k1ioumdp53p410us1p2p6j25rcojj.apps.googleusercontent.com"
  const API_KEY = "AIzaSyCQGidG7MdteGpF387souo0tSCEsEdagrEnp"
 
  // Array of API discovery doc URLs for APIs used by the quickstart
  const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
   const SCOPES = "https://www.googleapis.com/auth/calendar.readonly"

  const googleApi = () => {
   /**
       *  On load, called to load the auth2 library and API client library.
       */
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

  let event = {
  'summary': 'Google I/O 2015',
  'location': '800 Howard St., San Francisco, CA 94103',
  'description': 'A chance to hear more about Google\'s developer products.',
  'start': {
    'dateTime': '2015-05-28T09:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'end': {
    'dateTime': '2015-05-28T17:00:00-07:00',
    'timeZone': 'America/Los_Angeles'
  },
  'recurrence': [
    'RRULE:FREQ=DAILY;COUNT=2'
  ],
  'attendees': [
    {'email': 'lpage@example.com'},
    {'email': 'sbrin@example.com'}
  ],
  'reminders': {
    'useDefault': false,
    'overrides': [
      {'method': 'email', 'minutes': 24 * 60},
      {'method': 'popup', 'minutes': 10}
    ]
  }
}

 const request = gapi.client.calendar.events.insert({
  'calendarId': 'primary',
  'resource': event
});

   request.execute(event =>  {
  window.open(event.htmlLink);
   })
   })
  })
}
return (
  <div className="Contact" id="contact">
      <div id="Form">
    
      <ValidationForm click={handleClick}/>
      </div>
  </div>
)
  }
export default googleApi;


