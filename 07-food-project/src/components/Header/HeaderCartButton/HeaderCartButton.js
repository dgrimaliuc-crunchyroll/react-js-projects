import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext } from 'react';
import CartContext from '../../../store/cartContext';

export default function HeaderCartButton() {
  const { total, openCart } = useContext(CartContext);
  return (
    <div className={classes.bump}>
      <button
        className={classes.button}
        onClick={() => {
          if (total.amount) {
            openCart();
          }
        }}
      >
        <CartIcon />
        Your Cart
        <div className={classes.badge}>{total.amount}</div>
      </button>
    </div>
  );
}
