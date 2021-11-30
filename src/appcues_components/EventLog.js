import React from "react";

/*
  This component logs all Appcues events on the page. The log_events is defined
  here, but actually invoked in App.js, where the Appcues.on listener is defined.
*/


function EventLog() {
  const clearLog = () => { // removes all listed events in the event log
    const eventsLog = document.getElementById('events-log');
    while (eventsLog.firstChild) {
      eventsLog.removeChild(eventsLog.firstChild);
    }
  }

  return (
    <div>
      <h2>Event Log</h2>
      <ol id="events-log"></ol>
      <button onClick={clearLog}>Clear All Events</button>
    </div>
  )

}

function logEvents(name, payload) { // function to log Appcues events on the page
  const eventsLog = document.getElementById('events-log'); // get the event log HTML element from the page
  const eventName = document.createElement('li'); // create a list element for the event name
  const eventData = document.createElement('p'); // create a paragraph element for the event payload

  const parseStr = parseData(payload); 
  eventName.innerHTML = (name); // add the event name to the HTML element
  eventData.innerHTML = (parseStr); // add the stringified event payload

  eventsLog.appendChild(eventName); // add the name onto the page
  eventsLog.appendChild(eventData); // add the payload onto the page
}

const parseData = (data) => { // function to format event data into HTML-readable format
  let dataArray = JSON.stringify(data).split('');
  let parsed = "";
  let indent = "";

  dataArray.forEach(char => {
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
  logEvents,
  EventLog,
}