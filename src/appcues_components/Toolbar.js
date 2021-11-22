import React from "react";
import { EventLog } from "./EventLog";

/*
  This toolbar contains the Appcues javacript API calls useful for debugging and testing
*/


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
  window.Appcues.show(flow_id.value);
  flow_id.value = '';
}

const open_debugger = () => {
    window.Appcues.debug();
}

const Toolbar = () => {
    return (
        <div id="toolbar">
            <h2>The Appcues Toolbox</h2>
            <ul>
            <li>
                <h3>Enter ID and click "Appcues.show" to launch Appcues content</h3>
                <input placeholder="-AbCdEf-12345" id="show_flow" type="text"/>
                <button onClick={show_flow}>Appcues.show()</button>
            </li>
            <li><button onClick={clear_show}>Appcues.clear()</button></li>
            <li><button onClick={anonymous_user}>Appcues.anonymous()</button></li>
            <li><button onClick={open_debugger}>Appcues.debug()</button></li>
            <li><button onClick={reset_appcues}>Appcues.reset()</button></li>
            </ul>
            <EventLog />
        </div>
    )
}

export default Toolbar;