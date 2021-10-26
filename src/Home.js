import React from "react";
import ContentTrigger from "./appcues_components/ContentTrigger";
import EventLog from "./appcues_components/EventLog";

const show_flow = () => {
  const flow_id = document.getElementById("show_flow");
  const flow_id_str = flow_id.value;
  window.Appcues.show(flow_id_str);
  flow_id.value = '';
}



const Home = () => {
  return (
    <div>
      <h1>Welcome to this feature-rich test application.</h1>
      <p>Photo gallery</p>
      <ContentTrigger/>
      <EventLog/>

    </div>
  );
};

export default Home;


