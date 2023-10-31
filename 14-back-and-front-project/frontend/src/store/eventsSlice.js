import { createSlice } from '@reduxjs/toolkit';

const eventsSlice = createSlice({
  name: 'events',
  initialState: { events: [] },
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload);
    },
    getEvent(state, { id }) {
      return state.events.find((event) => event.id === id);
    },
    setEvents(state, action) {
      state.events = action.payload;
    },
  },
});
export const eventsActions = eventsSlice.actions;
export default eventsSlice.reducer;
