import {
  Await,
  defer,
  json,
  redirect,
  useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem.js";
import EventsList from "../components/EventsList.js";
import { Suspense } from "react";

function EventDetailsPage() {

  const { event, events } = useRouteLoaderData("event-detail");

  event.then((res) => console.log(res))

  // console.log(hello);

  return (
    <div>
      <Suspense fallback={<p style={{textAlign: 'center'}}>loading..</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent}/> }
        </Await>
      </Suspense>
      <Suspense fallback={<p style={{textAlign: 'center'}}>loading..</p>}>
        <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents}/> }
        </Await>
      </Suspense>
    </div>
  );
}

export default EventDetailsPage;

async function loadEvents() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    throw json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    const resData = await response.json();
    return resData.events;
  }
}

async function loadEvent(id) {
  const response = await fetch(`http://localhost:8080/events/${id}`);

  if (!response.ok) {
    throw json({ message: "Error fetching the event" }, { status: 500 });
  }
  const resData = await response.json();
  return resData.event;
}

export function loader({ request, params }) {
  const id = params.eventId;
  return defer({
    event: loadEvent(id),
    events: loadEvents(),
  });
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "some error occured in deleting the event" },
      { status: 500 }
    );
  }
  return redirect("/events");
}
