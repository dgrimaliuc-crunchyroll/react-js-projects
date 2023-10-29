import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cartItems: {},
  isOpen: false,
  total: { amount: 0, price: 0 },
  isChanged: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: { ...initialCartState },
  reducers: {
    addItem(state, action) {
      state.isChanged = true;
      const { meal, amount } = action.payload;
      const cartItems = state.cartItems;
      const currentAmount = cartItems[meal.id] ? cartItems[meal.id].amount : 0;
      cartItems[meal.id] = { ...meal, amount: currentAmount + amount };
      state.total.price = state.total.price + meal.price * amount;
      state.total.amount = state.total.amount + amount;
    },
    removeItem(state, action) {
      state.isChanged = true;
      const mealToExtract = action.payload.meal;
      const currentCartItems = state.cartItems;
      const mealAmount = currentCartItems[mealToExtract.id].amount;
      if (mealAmount === 1) {
        delete currentCartItems[mealToExtract.id];
      } else {
        currentCartItems[mealToExtract.id].amount = mealAmount - 1;
      }
      state.total.price = state.total.price - mealToExtract.price;
      state.total.amount = state.total.amount - 1;
    },
    setInitialState(state) {
      state.isChanged = true;
      state.isOpen = false;
      state.cartItems = {};
      state.total = { amount: 0, price: 0 };
    },
    setState(state, action) {
      state.isChanged = false;
      state.isOpen = false;
      if (action.payload) {
        state.cartItems = action.payload.cartItems || {};
        state.total = action.payload.total || {};
      }
    },

    openCart(state) {
      state.isChanged = false;
      state.isOpen = true;
    },
    closeCart(state) {
      state.isChanged = false;
      state.isOpen = false;
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
