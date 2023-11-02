import { useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';

export async function eventLoader({ params }) {
  const response = await fetch(
    `http://localhost:8080/events/${params.eventId}`
  );
  if (!response.ok) {
    throw new Response(response.statusText, { status: response.status });
  } else {
    const resData = await response.json();
    return await resData.event;
  }
}

export default function EventDetailPage() {
  const event = useRouteLoaderData('event-detail');

  return (
    <>
      <h1>Event Detail Page</h1>
      {event && <EventItem event={event} />}
    </>
  );
}
