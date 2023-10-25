import { configureStore } from '@reduxjs/toolkit';

import user from './user';
import cart from './cart';

const store = configureStore({
  reducer: { user, cart },
});

store.subscribe(() => {
  console.log(store.getState());
});

export default store;
