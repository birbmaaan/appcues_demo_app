import React, { useState } from "react";
// import { render } from "react-dom";

let current_type = '';
let current_name = '';
let current_id = '';

function EventLog() {
  const [current_id, setId] = useState('');
  const [current_name, setName] = useState('');
  const [current_type, setType] = useState('');
  
  {
    return (
      <div>
            <h2>See all events here</h2>
            <ul id="events_log">Flow events</ul>
        </div>
    )
  }
}

function log_events(e, a) {
  check_object(a);
  print_name()
  print_event(e, a);
  print_type();
}

const print_type = () => {
  const events_log = document.getElementById('events_log');
  const event_type = document.createElement('p');
  
  event_type.innerHTML = current_type;
  events_log.appendChild(event_type);
}

const print_name = () => {
  const events_log = document.getElementById('events_log');
  const type_name = document.createElement('p');
  type_name.innerHTML = ("Name: " + current_name + "; ID: " + current_id);
  events_log.appendChild(type_name);
}

const print_event = (e, a) => {
  // console.log(e);
  const events_log = document.getElementById('events_log');
  let event = document.createElement("li");
  event.innerHTML = e;
  events_log.appendChild(event);
}

const check_object = (event) => {
  let object;
  
  if (event.checklistId) {
    object = "checklist";
  } else if (event.flowId) {
    object = "flow";
  } else {
    object = "other";
  }
  
  get_info(event, object);
  return object;
}

const get_info = (event, object) => {
  
  if (object == "checklist") {
    current_id = event.checklistId;
    current_name = event.checklistName;
    current_type = "checklist";
  } else if (object == "flow") {
    current_id = event.flowId;
    current_name = event.flowName;
    current_type = "flow";
  } else {
    console.log(event);
  }
}


export {
  log_events,
  EventLog,
}
// export default EventLog;


  // const print_type = () => {
  //   const events_log = document.getElementById('events_log');
  //   const event_type = document.createElement('p');
    
  //   event_type.innerHTML = current_type;
  //   events_log.appendChild(event_type);
  // }
  
  // const print_name = () => {
  //   const events_log = document.getElementById('events_log');
  //   const type_name = document.createElement('');
    
  //   type_name.innerHTML = ("Name: " + current_name + "; ID: " + current_id);
  //   events_log.appendChild(type_name);
  // }
  
  // const print_event = (e, a) => {
  //   const events_log = document.getElementById('events_log');
  //   let event = document.createElement("li");
    
  //   event.innerHTML = e;
  
  //   events_log.appendChild(event);
    
  //   console.log(e);
  //   console.log(a);
  // }
  
  // const check_object = (event) => {
  //   let object;
    
  //   if (event.checklistId) {
  //     object = "checklist";
  //   } else if (event.flowId) {
  //     object = "flow";
  //   } else {
  //     object = "other";
  //   }
    
  //   get_info(event, object);
  //   return object;
  // }
  
  // const get_info = (event, object) => {
    
  //   if (object == "checklist") {
  //     setId(event.checklistId);
  //     setName(event.flowName);
  //   } else if (object == "flow") {
  //     setId(event.flowId);
  //     setName(event.flowName);
  //   } else {
  //     console.log(event);
  //   }
  // }