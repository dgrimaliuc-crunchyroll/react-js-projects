import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from './cart';

const CartActionsContext = createContext({
  openCart: () => {},
  closeCart: () => {},
});
export default CartActionsContext;

export function CartActionsContextProvider({ children }) {
  const dispatch = useDispatch();

  function openCart() {
    dispatch(cartActions.openCart());
  }
  function closeCart() {
    dispatch(cartActions.closeCart());
  }

  return (
    <CartActionsContext.Provider
      value={{
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartActionsContext.Provider>
  );
}
