import { eventsActions } from '../eventsSlice';

export function fetchEvents() {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/events');

      if (!response.ok) {
        throw new Error('Could not fetch events.');
      }

     return await response.json();
    };
    const response = await fetchData();
    dispatch(eventsActions.setEvents(response.events));
  };
}
