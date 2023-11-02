import { json, redirect } from 'react-router-dom';
import EventForm from '../components/EventForm';

export async function newEventAction({ request, params }) {
  const data = await request.formData();

  const newEvent = {
    title: data.get('title'),
    description: data.get('description'),
    image: data.get('image'),
    date: data.get('date'),
  };

  const resp = await fetch('http://localhost:8080/events', {
    method: request.method,
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

export default function NewEventPage() {
  return (
    <>
      <h1>New Event Page</h1>
      <EventForm method='post' />
    </>
  );
}
