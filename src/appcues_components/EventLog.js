import React from "react";

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
      <button onClick={clear_log}>Clear All Events</button>
      <ol id="events_log"></ol>
    </div>
  )

}

function log_events(name, payload) { // function to log Appcues events on the page
  const events_log = document.getElementById('events_log'); // get the event log HTML element from the page
  const event_name = document.createElement('li'); // create a list element for the event name
  const event_data = document.createElement('p'); // create a paragraph element for the event payload

  const payload_str = JSON.stringify(payload); // change the object into a flattened string
  const parse_str = parse_data(payload_str);

  event_name.innerHTML = (name); // add the event name to the HTML element
  event_data.innerHTML = (parse_str); // add the stringified event payload

  events_log.appendChild(event_name); // add the name onto the page
  events_log.appendChild(event_data); // add the payload onto the page
}

const parse_data = (data) => {
  const separators = ":,{}";
  let split = "";

  data.split("").forEach(el => {
    split += el
    if (separators.indexOf(el) >= 0) {
      split += " ";
    }
  });

  return split;
}

export {
  log_events,
  EventLog,
}