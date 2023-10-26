import React from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import Modal from './components/Modal/Modal';
import { CartContextProvider } from './store/cartContext';
import { CartActionsContextProvider } from './store/cartActionsContext';

function App() {
  return (
    <CartActionsContextProvider>
      <CartContextProvider>
        <Modal />
        <Header />
        <MealsSummary />
        <AvailableMeals />
      </CartContextProvider>
    </CartActionsContextProvider>
  );
}

export default App;
