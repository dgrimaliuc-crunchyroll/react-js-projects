import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';

const userSlice = createSlice({
  name: 'user',
  initialState: { user: {} },
  reducers: {
    getOrCreateUser(state) {
      let existsingUser = JSON.parse(window.localStorage.getItem('user'));
      if (!existsingUser) {
        existsingUser = { id: uuid() };
        window.localStorage.setItem('user', JSON.stringify(existsingUser));
        state = existsingUser; // TODO rewrite
      }
      return existsingUser;
    },
    saveUserData(state, action) {
      let currentUser = this.getOrCreateUser()(); // TODO may not work because it hust returns method
      currentUser = { ...currentUser, ...action.payload };
      window.localStorage.setItem('user', JSON.stringify(currentUser));
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
