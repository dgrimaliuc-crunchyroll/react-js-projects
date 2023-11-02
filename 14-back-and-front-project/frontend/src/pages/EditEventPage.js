import EventForm from '../components/EventForm';
import { useRouteLoaderData, json, redirect } from 'react-router-dom';
import EventItem from '../components/EventItem';

export async function updateEventAction({ request, params }) {
  const data = await request.formData();

  const newEvent = {
    title: data.get('title'),
    description: data.get('description'),
    image: data.get('image'),
    date: data.get('date'),
  };

  const resp = await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvent),
  });
  if (!resp.ok) {
    console.log(resp);
    throw json(
      {
        message: `Could not create event. ${resp.statusText}`,
      },
      { status: resp.status }
    );
  }
  return redirect('/events');
}

export default function EditEventPage() {
  const event = useRouteLoaderData('event-detail');

  return (
    <>
      <h1>Edit Event Page</h1>
      <>
        <EventItem event={event} showBody='false' />
        <EventForm method='patch' event={event} />
      </>
    </>
  );
}
