import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { Await, defer, useLoaderData } from 'react-router-dom'; //json

async function fetchEvents() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status }); // or json(...)
  } else {
    const resData = await response.json();
    return await resData.events;
  }
}
export function eventsLoader() {
  return defer({
    events: fetchEvents(),
  });
}

function EventsPage() {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <h1>Events Page</h1>
      <Await resolve={events}>
        {(result) => <EventsList events={result} />}
      </Await>
    </Suspense>
  );
}

export default EventsPage;
