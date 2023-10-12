import React, { useContext, useState } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from '../MealItemForm/MealItemForm';
import CartContext from '../../store/cartContext';

export default function MealItem({ meal }) {
  const { addItem } = useContext(CartContext);
  const [amount, setAmount] = useState(0);

  function onAddToCart(event) {
    event.preventDefault();
    addItem(meal, amount);
    // setCartItems((prev) => {
    //   const currentAmount = prev[meal.id] ? prev[meal.id].amount : 0;
    //   prev[meal.id] = { ...meal, amount: currentAmount + amount };
    //   setTotal((prev) => {
    //     return {
    //       price: prev.price + meal.price * amount,
    //       amount: prev.amount + amount,
    //     };
    //   });
    //   return prev;
    // });

    setAmount(0);
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>${meal.price}</div>
      </div>
      <MealItemForm
        onAddToCart={onAddToCart}
        value={amount}
        setValue={setAmount}
      />
    </li>
  );
}
