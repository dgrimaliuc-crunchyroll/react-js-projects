import { useParams } from 'react-router-dom';
import { getEvent } from '../store/utils/api';
import { useEffect, useState } from 'react';
import EventItem from '../components/EventItem';

export default function EventDetailPage() {
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
      <h1>Event Detail Page</h1>
      {event && <EventItem event={event} />}
    </>
  );
}
