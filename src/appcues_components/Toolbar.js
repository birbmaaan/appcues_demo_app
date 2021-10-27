import React from "react";

const reset_appcues = () => {
    window.Appcues.reset();
}

const clear_show = () => {
    window.Appcues.clearShow();
}

const anonymous_user = () => {
    window.Appcues.anonymous();
}

const Toolbar = () => {

    return (
        <div>
            
            <button onClick={clear_show}>CLick me to clear a recalled checklist</button>
            <button onClick={anonymous_user}>Click me to create an anonymous user</button>
            <button onClick={reset_appcues}>Click me to reset this Appcues session</button>
        </div>
    )
}

export default Toolbar;