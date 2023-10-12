import React from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import Modal from './components/Modal/Modal';
import { StoreProvider } from './store/storeContext';

import { DUMMY_MEALS } from './assets/dummy-meals.js';

function App() {
  return (
    <StoreProvider>
      <Modal />
      <Header />
      <MealsSummary />
      <AvailableMeals meals={DUMMY_MEALS} />
    </StoreProvider>
  );
}

export default App;
