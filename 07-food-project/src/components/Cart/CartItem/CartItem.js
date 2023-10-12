import classes from './CartItem.module.css';
import { useContext, useState } from 'react';
import CartContext from '../../../store/cartContext';

export default function CartItem({ item }) {
  const { cartItems, setCartItems, setTotal } = useContext(CartContext);
  const [amount, setAmount] = useState(cartItems[item.id].amount);

  const increaseAmount = () => {
    setCartItems((prev) => {
      prev[item.id].amount = amount + 1;
      return prev;
    });
    setAmount((prev) => prev + 1);
    setTotal((prev) => {
      return { amount: prev.amount + 1, price: prev.price + item.price };
    });
  };

  const decreaseAmount = () => {
    setCartItems((prev) => {
      prev[item.id].amount = amount - 1;
      return prev;
    });
    setAmount((prev) => prev - 1);
    setTotal((prev) => {
      return { amount: prev.amount - 1, price: prev.price - item.price };
    });
  };

  if (!amount) {
    return null;
  }

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

/**
   <div className={classes['cart-item']}>
      <h2>{item.name}</h2>
      <div className={classes.summary}>
        <span className={classes.price}>${item.price}</span>
        <span className={classes.amount}>x {item.amount}</span>
      </div>
      <div className={classes.actions}>
        <button>-</button>
        <button>+</button>
      </div>
    </div>
 */
