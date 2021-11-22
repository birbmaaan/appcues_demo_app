import React from "react";

/*
  This component logs all Appcues events on the page. The log_eventts is defined
  here, but actually invoked in App.js, where the Appcues.on listener is defined.
*/


function EventLog() {
  const clear_log = () => { // removes all listed events in the event log
    const events_log = document.getElementById('events_log');
    while (events_log.firstChild) {
      events_log.removeChild(events_log.firstChild);
    }
  }

  return (
    <div>
      <h2>Event Log</h2>
      <ol id="events_log"></ol>
      <button onClick={clear_log}>Clear All Events</button>
    </div>
  )

}

function log_events(name, payload) { // function to log Appcues events on the page
  const events_log = document.getElementById('events_log'); // get the event log HTML element from the page
  const event_name = document.createElement('li'); // create a list element for the event name
  const event_data = document.createElement('p'); // create a paragraph element for the event payload

  const parse_str = parse_data(payload); 
  event_name.innerHTML = (name); // add the event name to the HTML element
  event_data.innerHTML = (parse_str); // add the stringified event payload

  events_log.appendChild(event_name); // add the name onto the page
  events_log.appendChild(event_data); // add the payload onto the page
}

const parse_data = (data) => { // function to format event data into HTML-readable format
  let data_array = JSON.stringify(data).split('');
  let parsed = "";
  let indent = "";

  data_array.forEach(char => {
    if (char === "{") {
      indent += "&nbsp;&nbsp;&nbsp;&nbsp;"
      parsed += char + "<br>" + indent;
    } else if (char === "}") {
      indent = indent.substring(24);
      parsed += "<br>" + indent + char;
    } else if (char === ",") {
      parsed += char + "<br>" + indent;
    } else if (char === ":") {
      parsed += char + " ";
    } else {
      parsed += char;
    }
  })

  return parsed;
}

export {
  log_events,
  EventLog,
}