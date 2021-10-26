import React from "react";

const print_event = () => {
  window.Appcues.on("all", function(e, a) {
    const events_log = document.getElementById('events_log');
    let event = document.createElement("li");
    event.innerHTML = e;
    events_log.appendChild(event);
    console.log(e);
    console.log(a);

  })
}

const EventLog = () => {
    print_event();
    return (
        <div>
            <h2>See all events here</h2>
            <ul id="events_log">Flow events</ul>
        </div>
    )
}

export default EventLog;