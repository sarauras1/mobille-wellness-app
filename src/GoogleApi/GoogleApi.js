import React  from "react";

 var gapi = window.gapi
  var CLIENT_ID = "205346488083-8ur1n2rm2peaanob4lmstfnt2o9pslqe.apps.googleusercontent.com"
  var API_KEY = "AIzaSyCQGidG7MdteGpF387souo0tSCEsEdagrE"
 
  // Array of API discovery doc URLs for APIs used by the quickstart
  var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]

  // Authorization scopes required by the API; multiple scopes can be
  // included, separated by spaces.
   var SCOPES = "https://www.googleapis.com/auth/calendar.events"
  
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
            var event = {
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
return (
     <div>
      <div >
    
      <button  className="button-style"  onClick={handleClick}>book</button>
    
      </div>
  </div>
)
  }
export default googleApi;


