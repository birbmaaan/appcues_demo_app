import React from 'react';

/*
  This component allows you to launch Appcues content
*/

const showFlow = () => {
  const flowId = document.getElementById("show-flow");
  const flowIdStr = flowId.value;
  window.Appcues.show(flowIdStr);
  flowId.value = '';
}

const ContentTrigger = () => {
     return (
        <div>
            <h2>Enter flow ID to launch it on this page</h2>
            <input id="show-flow" type="text"/>
            <button onClick={showFlow}>Launch Flow</button>
        </div>
     )
}

export default ContentTrigger;