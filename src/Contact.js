import React from "react";

/* 
  feel free to add/remove any HTML you would like. Just remember that all content
  must be returned nested inside a single element (in this case, the .app-content div)
*/

const Contact = () => {
  return (
    <div className="app-content">
      <h1>Contact Us</h1>
      <p>
        If you have any questions about this app, feel free to reach out to Elijah through{" "}
        <a href="mailto:elijah@appcues.com">email</a> or through Slack.
      </p>
      <h2>Other resources:</h2>
      <p>
        For any questions about Appcues, check out <a href="https://appcues.com">Appcues.com</a>
      </p>
      <p>
        <a href="https://docs.appcues.com/">The Appcues docs</a> are also a great resource.  
      </p>      
    </div>
  );
};

export default Contact;
