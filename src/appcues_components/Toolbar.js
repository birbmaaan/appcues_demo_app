import React from "react";

// import EventLog from "./EventLog";


const reset_appcues = () => {
    window.Appcues.reset();
}

const clear_show = () => {
    window.Appcues.clearShow();
}

const anonymous_user = () => {
    window.Appcues.anonymous();
}

const show_flow = () => {
  const flow_id = document.getElementById("show_flow");
  const flow_id_str = flow_id.value;
  window.Appcues.show(flow_id_str);
  flow_id.value = '';
}

const Toolbar = () => {

    return (
        <div>
            <h2>The Appcues Toolbox</h2>
            <ul>
            <li>
                <p>Enter flow ID to launch it on this page</p>
                <input id="show_flow" type="text"/>
                <button onClick={show_flow}>Launch Flow</button>
            </li>
            <li><button onClick={clear_show}>Click me to clear a shown checklist</button></li>
            <li><button onClick={anonymous_user}>Click me to create an anonymous user</button></li>
            <li><button onClick={reset_appcues}>Click me to reset this Appcues session</button></li>
            </ul>
            {/* <EventLog /> */}
        </div>
    )
}

export default Toolbar;