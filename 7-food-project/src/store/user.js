import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

  function getUser() {
    return JSON.parse(window.localStorage.getItem('user'));
  }

  function saveUser(user) {
    window.localStorage.setItem('user', JSON.stringify(user));
  }

  function createUser() {
    const user = { id: uuid() };
    window.localStorage.setItem('user', JSON.stringify(user));
    return user;
  }

  const userSlice = createSlice({
    name: 'user',
    initialState: { id: null, name: '', street: '', postalCode: '', city: '' },
    reducers: {
      getUser(state) {
        let user = state.id ? state : getUser();
        if (!user) {
          user = createUser();
        }
        state.id = user.id;
        state.name = user.name;
        state.street = user.street;
        state.postalCode = user.postalCode;
        state.city = user.city;
      },
      saveUser(state, action) {
        let user = { ...state, ...action.payload };
        state.name = user.name.trim();
        state.street = user.street.trim();
        state.postalCode = user.postalCode.trim();
        state.city = user.city.trim();
        saveUser(user);
      },
    },
  });

export const userActions = userSlice.actions;
export default userSlice.reducer;
