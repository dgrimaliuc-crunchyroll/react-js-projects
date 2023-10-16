import { createContext, useState, useReducer } from 'react';

const initialCartState = {
  cartItems: {},
  total: { amount: 0, price: 0 },
};

const CartContext = createContext({
  cart: { ...initialCartState },
  addItem: () => {},
  removeItem: () => {},
  setInitialState: () => {},
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
});
export default CartContext;

function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM':
      const { meal, amount } = action.value || {};
      const cartItems = state.cartItems;
      const currentAmount = cartItems[meal.id] ? cartItems[meal.id].amount : 0;
      cartItems[meal.id] = { ...meal, amount: currentAmount + amount };

      return {
        ...state,
        total: {
          price: state.total.price + meal.price * amount,
          amount: state.total.amount + amount,
        },
      };
    case 'REMOVE_ITEM':
      const mealToExtract = action.value;
      const currentCartItems = state.cartItems;
      const mealAmount = currentCartItems[mealToExtract.id].amount;
      if (mealAmount === 1) {
        delete currentCartItems[mealToExtract.id];
      } else {
        currentCartItems[mealToExtract.id].amount = mealAmount - 1;
      }

      return {
        ...state,
        total: {
          price: state.total.price - mealToExtract.price,
          amount: state.total.amount - 1,
        },
      };
    case 'SET_INITIAL_STATE':
      return {
        cartItems: {},
        total: { amount: 0, price: 0 },
      };
    default:
      return JSON.parse(
        JSON.stringify({
          cartItems: {},
          total: { amount: 0, price: 0 },
        })
      );
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, { ...initialCartState });
  const [isCartOpen, setIsCartOpen] = useState(false);

  function addItem(meal, amount) {
    dispatch({ type: 'ADD_ITEM', value: { meal, amount } });
  }

  function removeItem(meal) {
    dispatch({ type: 'REMOVE_ITEM', value: meal });
  }
  function setInitialState() {
    dispatch({ type: 'SET_INITIAL_STATE' });
  }

  function openCart() {
    setIsCartOpen(true);
  }
  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        setInitialState,
        isCartOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
