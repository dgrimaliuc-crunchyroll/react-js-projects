import { createSlice } from '@reduxjs/toolkit';

const initialCartState = {
  cartItems: {},
  total: { amount: 0, price: 0 },
};

const CartContext = {
  cart: { ...initialCartState },
  addItem: () => {},
  removeItem: () => {},
  setInitialState: () => {},
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
  getOrCreateUser: () => {},
  saveUserData: () => {},
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: { ...initialCartState },
  reducers: {
    addItem(state, action) {
      const { meal, amount } = action.payload || {};
      const cartItems = state.cartItems;
      const currentAmount = cartItems[meal.id] ? cartItems[meal.id].amount : 0;
      cartItems[meal.id] = { ...meal, amount: currentAmount + amount };
      state.price = state.total.price + meal.price * amount;
      state.amount = state.total.amount + amount;
    },
    removeItem(state, action) {
      const mealToExtract = action.payload;
      const currentCartItems = state.cartItems;
      const mealAmount = currentCartItems[mealToExtract.id].amount;
      if (mealAmount === 1) {
        delete currentCartItems[mealToExtract.id];
      } else {
        currentCartItems[mealToExtract.id].amount = mealAmount - 1;
      }
      state.price = state.total.price - mealToExtract.price;
      state.amount = state.total.amount - 1;
    },
    setInitialState(state) {
      state = { cartItems: {}, total: { amount: 0, price: 0 } };
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
