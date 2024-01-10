import React from "react";
import EventForm from "../components/EventForm";
import { json, redirect } from "react-router-dom";

function NewEventPage() {
  return (
    <div>
      <EventForm  method="post"/>
    </div>
  );
}

export default NewEventPage;
