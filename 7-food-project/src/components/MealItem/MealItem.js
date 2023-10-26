import React, { useContext, useState } from 'react';
import classes from './MealItem.module.css';
import MealItemForm from '../MealItemForm/MealItemForm';
import ActionsContext from '../../store/actionsContext';

export default function MealItem({ meal }) {
  const { addItem } = useContext(ActionsContext);
  const [amount, setAmount] = useState('1');

  function onAddToCart(event) {
    event.preventDefault();
    addItem(meal, +amount);
    setAmount('1');
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
