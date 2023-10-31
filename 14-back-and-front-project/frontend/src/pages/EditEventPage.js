import EventForm from '../components/EventForm';
import { getEvent } from '../store/utils/api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import EventItem from '../components/EventItem';

export default function EditEventPage() {
  const [event, setEvent] = useState(null);

  const params = useParams();

  useEffect(() => {
    getEvent(params.eventId)
      .then((resp) => setEvent(resp.event))
      .catch((err) => {
        throw err;
      });
  }, [params.eventId]);

  return (
    <>
      <h1>Edit Event Page</h1>
      {!event && <h1>Loading...</h1>}
      {event && <EventItem event={event} showActions='false' />}
      <EventForm />
    </>
  );
}
