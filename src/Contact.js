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
        You can email us at{" "}
        <a href="mailto:notarealemail@appcues.com">notarealemail@appcues.com</a>
      </p>
      <h2>Other ways to contact:</h2>
      <p>
        For more ways to contact us, check out our blog at <a href="https://blog.notarealblog.com">blog.notarealblog.com</a>
      </p>
    </div>
  );
};

export default Contact;
