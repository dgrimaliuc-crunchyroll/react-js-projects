import { createContext } from 'react';
import { useDispatch } from 'react-redux';
import { cartActions } from './cart';
import { userActions } from './user';

const CartActionsContext = createContext({
  openCart: () => {},
  closeCart: () => {},
  addItem: () => {},
  removeItem: () => {},
  setInitialState: () => {},
  fetchUser: () => {},
  saveUser: () => {},
});
export default CartActionsContext;

export function CartActionsContextProvider({ children }) {
  const dispatch = useDispatch();

  function addItem(meal, amount) {
    dispatch(cartActions.addItem({ meal, amount }));
  }

  function removeItem(meal) {
    dispatch(cartActions.removeItem({ meal }));
  }

  function openCart() {
    dispatch(cartActions.openCart());
  }

  function closeCart() {
    dispatch(cartActions.closeCart());
  }

  function setInitialState() {
    dispatch(cartActions.setInitialState());
  }

  function fetchUser() {
    dispatch(userActions.getUser());
  }

  function saveUser(user) {
    dispatch(userActions.saveUser(user));
  }

  return (
    <CartActionsContext.Provider
      value={{
        openCart,
        closeCart,
        addItem,
        removeItem,
        setInitialState,
        saveUser,
        fetchUser,
      }}
    >
      {children}
    </CartActionsContext.Provider>
  );
}
