import React from "react";
import ContentTrigger from "./appcues_components/ContentTrigger";
import EventLog from "./appcues_components/EventLog";

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        You can email us at{" "}
        <a href="mailto:elijah@appcues.com">elijah@appcues.com</a>
      </p>
      <ContentTrigger/>
      <EventLog/>
    </div>
  );
};

export default Contact;
