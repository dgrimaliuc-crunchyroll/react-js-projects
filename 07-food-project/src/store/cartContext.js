import { createContext, useState, useReducer } from 'react';

const CartContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  isCartOpen: false,
  openCart: () => {},
  closeCart: () => {},
  total: {
    amount: 0,
    price: 0,
  },
  setTotal: () => {},
});
export default CartContext;

const initialState = {
  cartItems: [],
  total: { amount: 0, price: 0 },
};

function cartReducer(state, action) {
  switch (action.type || '') {
    case 'ADD_ITEM':
      return { ...state };
    case 'REMOVE_ITEM':
      return { ...state };
    default:
      return initialState;
  }
}

function addItem(meal) {
  cartReducer({ type: 'ADD_ITEM', value: meal });
}

export function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, {});
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState({ amount: 0, price: 0 });

  function openCart() {
    setIsCartOpen(true);
  }
  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        isCartOpen,
        openCart,
        closeCart,
        total,
        setTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
