import React from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import Modal from './components/Modal/Modal';
import { CartContextProvider } from './store/cartContext';

import { DUMMY_MEALS } from './assets/dummy-meals.js';

function App() {
  return (
    <CartContextProvider>
      <Modal />
      <Header />
      <MealsSummary />
      <AvailableMeals meals={DUMMY_MEALS} />
    </CartContextProvider>
  );
}

export default App;
