import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';
import auth from './auth';
const store = configureStore({
  reducer: { counter, auth },
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
