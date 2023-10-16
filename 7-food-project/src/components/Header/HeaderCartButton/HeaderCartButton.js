import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext, useState, useEffect } from 'react';
import CartContext from '../../../store/cartContext';

export default function HeaderCartButton() {
  const { cart, openCart } = useContext(CartContext);
  const [bump, setBump] = useState('');

  useEffect(() => {
    setBump(classes.bump);

    const timer = setTimeout(() => {
      setBump('');
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [cart.total.amount]);

  return (
    <div className={bump}>
      <button
        className={classes.button}
        onClick={() => {
          openCart();
        }}
      >
        <CartIcon />
        Your Cart
        <div className={classes.badge}>{cart.total.amount}</div>
      </button>
    </div>
  );
}
