import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom'; //json

export async function eventsLoader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status }); // or json(...)
  } else {
    const resData = await response.json();
    return await resData.events;
  }
}

function EventsPage() {
  const events = useLoaderData();
  return (
    <>
      <h1>Events Page</h1>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;
