import { createContext, useState } from 'react';

const StoreContext = createContext({
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
export default StoreContext;

export function StoreProvider({ children }) {
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
    <StoreContext.Provider
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
    </StoreContext.Provider>
  );
}
