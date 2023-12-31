import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import { useContext, useState, useEffect } from 'react';
import ActionsContext from '../../store/actionsContext';
import { useSelector } from 'react-redux';

export default function HeaderCartButton() {
  const amount = useSelector((state) => state.cart.total.amount);
  const { openCart } = useContext(ActionsContext);
  const [bump, setBump] = useState('');

  useEffect(() => {
    setBump(classes.bump);

    const timer = setTimeout(() => {
      setBump('');
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [amount]);

  return (
    <div className={bump}>
      <button className={classes.button} onClick={openCart}>
        <CartIcon />
        Your Cart
        <div className={classes.badge}>{amount}</div>
      </button>
    </div>
  );
}
