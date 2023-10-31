import { configureStore } from '@reduxjs/toolkit';
import events from './eventsSlice';

const store = configureStore({
  reducer: { events },
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
