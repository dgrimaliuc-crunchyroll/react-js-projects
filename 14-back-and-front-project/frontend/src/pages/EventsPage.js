import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from '../store/thunks/events';
import EventsList from '../components/EventsList';

export default function EventsPage() {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.events.events);

  useEffect(() => {
    dispatch(fetchEvents());
  }, [dispatch]);
  return (
    <>
      <h1>Events Page</h1>
      <EventsList events={events} />
    </>
  );
}
