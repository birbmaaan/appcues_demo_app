import React, { useState } from "react";
import { render } from "react-dom";

function EventLog() {
  const [current_id, setId] = useState('');
  const [current_name, setName] = useState('');
  const [current_type, setType] = useState('');
  
  const print_events = () => {
    debugger;
    console.log('printing');
    window.Appcues.on("all", function(e, a) {
      
      const old_name = current_name;
      
      const type = check_object(a);
      
      //   if new_flow: create new section, add to events
      //   else: add events to current section
      
      if (current_type !== type) {
        setType(type);
        print_type()
      }
      
      if (current_name !== old_name) {
        print_name();
      }
      
      setId(a.flowId);
      setName(a.flowName);
      
      print_event(e, a);
      // change_content_type(a)
      // add_events(e, a)
      
    })
  }
  
  const print_type = () => {
    const events_log = document.getElementById('events_log');
    const event_type = document.createElement('p');
    
    event_type.innerHTML = current_type;
    events_log.appendChild(event_type);
  }
  
  const print_name = () => {
    const events_log = document.getElementById('events_log');
    const type_name = document.createElement('');
    
    type_name.innerHTML = ("Name: " + current_name + "; ID: " + current_id);
    events_log.appendChild(type_name);
  }
  
  const print_event = (e, a) => {
    const events_log = document.getElementById('events_log');
    let event = document.createElement("li");
    
    event.innerHTML = e;
  
    events_log.appendChild(event);
    
    console.log(e);
    console.log(a);
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
      setId(event.checklistId);
      setName(event.flowName);
    } else if (object == "flow") {
      setId(event.flowId);
      setName(event.flowName);
    } else {
      console.log(event);
    }
  }
  
  {
    print_events();
    return (
      <div>
            <h2>See all events here</h2>
            <ul id="events_log">Flow events</ul>
        </div>
    )
  }
  
}
  export default EventLog;