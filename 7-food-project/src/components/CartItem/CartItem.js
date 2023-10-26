import classes from './CartItem.module.css';
import { useContext, useState } from 'react';
import ActionsContext from '../../store/actionsContext';
import { useSelector } from 'react-redux';

export default function CartItem({ item }) {
  const { addItem, removeItem } = useContext(ActionsContext);
  const initialAmount = useSelector(
    (state) => state.cart.cartItems[item.id].amount
  );

  const [amount, setAmount] = useState(initialAmount);

  const increaseAmount = () => {
    addItem(item, 1);
    setAmount((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    removeItem(item);
    setAmount((prev) => prev - 1);
  };

  return (
    <div className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${item.price.toFixed(2)}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={decreaseAmount}>-</button>
        <button onClick={increaseAmount}>+</button>
      </div>
    </div>
  );
}
