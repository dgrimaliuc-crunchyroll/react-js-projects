import EventForm from '../components/EventForm';
import { useRouteLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';


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
