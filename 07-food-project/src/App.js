import React, { useState } from 'react';
import Header from './components/Header/Header';
import MealsSummary from './components/MealsSummary/MealsSummary';
import AvailableMeals from './components/AvailableMeals/AvailableMeals';
import Modal from './components/Modal/Modal';

import { DUMMY_MEALS } from './assets/dummy-meals.js';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartItems = [];

  function openCart() {
    setIsCartOpen(true);
  }
  function closeCart() {
    setIsCartOpen(false);
  }

  return (
    <div>
      <Modal
        cartItems={cartItems}
        isCartOpen={isCartOpen}
        closeCart={closeCart}
      />
      <Header openCart={openCart} />
      <MealsSummary />
      <AvailableMeals meals={DUMMY_MEALS} />
    </div>
  );
}

export default App;
