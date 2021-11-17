import React from "react";

import { EventLog } from "./EventLog";


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

const open_debugger = () => {
    window.Appcues.debug();
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
            <li><button onClick={clear_show}>Clear a checklist</button></li>
            <li><button onClick={anonymous_user}>Create an anonymous user</button></li>
            <li><button onClick={reset_appcues}>Reset this Appcues session</button></li>
            <li><button onClick={open_debugger}>Open the debugger</button></li>
            </ul>
            <EventLog />
        </div>
    )
}

export default Toolbar;