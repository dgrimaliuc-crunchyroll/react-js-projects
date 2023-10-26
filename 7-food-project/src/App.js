import React from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import Modal from './components/Modal/Modal';
import { CartActionsContextProvider } from './store/actionsContext';

function App() {
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
