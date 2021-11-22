import React from 'react';

/*
  This component allows you to launch Appcues content
*/

const show_flow = () => {
  const flow_id = document.getElementById("show_flow");
  const flow_id_str = flow_id.value;
  window.Appcues.show(flow_id_str);
  flow_id.value = '';
}

const ContentTrigger = () => {
     return (
        <div>
            <h2>Enter flow ID to launch it on this page</h2>
            <input id="show_flow" type="text"/>
            <button onClick={show_flow}>Launch Flow</button>
        </div>
     )
}

export default ContentTrigger;