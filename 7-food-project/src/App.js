import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import Modal from './components/Modal/Modal';
import { CartActionsContextProvider } from './store/actionsContext';
import { updateCart, getCart } from './httpUtils/thunk/cartThunk';
import { useDispatch, useSelector } from 'react-redux';

let isInitialState = true;
function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (isInitialState || !cart.isChanged) {
      isInitialState = false;
      return;
    }
    const timer = setTimeout(() => {
      dispatch(updateCart(cart));
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  }, [cart, dispatch]);

  return (
    <CartActionsContextProvider>
      <Modal />
      <Header />
      <MealsSummary />
      <AvailableMeals />
    </CartActionsContextProvider>
  );
}

export default App;
