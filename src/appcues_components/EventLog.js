import React, { useState } from "react";

function EventLog() {
  const clear_log = () => {
    const events_log = document.getElementById('events_log');
    while (events_log.firstChild) {
      events_log.removeChild(events_log.firstChild);
    }
  }

  {
    return (
      <div>
            <button onClick={clear_log}>Clear All Events</button>
            <h2>See all events here</h2>
            <ul id="events_log">Flow events</ul>
        </div>
    )
  }
}

function log_events(name, payload) { // function to log Appcues events on the page
  const events_log = document.getElementById('events_log'); // get the event log HTML element from the page
  const event_name = document.createElement('li'); // create a list element for the event name
  const event_data = document.createElement('p'); // create a paragraph element for the event payload

  const event_string = JSON.stringify(payload); // change the object into a flattened string

  event_name.innerHTML = (name); // add the event name to the HTML element
  event_data.innerHTML = (event_string); // add the stringified event payload

  events_log.appendChild(event_name); // add the name onto the page
  events_log.appendChild(event_data); // add the payload onto the page
}

// const parse_data = (data) => { // take a stringified object and format it into readable HTML

// }

export {
  log_events,
  EventLog,
}

// {"id":"checklist_item_started","name":"Checklist Item Started","checklistId":"-MmPoj9sZviFmgs2CcWK",
// "checklistName":"Testing checklist 5","itemId":"-MmPoj9t-OX-bsAvImiH","itemIndex":0,"itemLabel":"",
// "timestamp":1637127349571,"sessionId":1637127347605}