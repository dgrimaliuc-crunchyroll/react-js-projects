import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import { useContext } from 'react';
import StoreContext from '../../store/storeContext';

export default function Cart() {
  const { cartItems, total, closeCart, setCartItems, setTotal } =
    useContext(StoreContext);

  if (!total.amount) {
    closeCart();
  }

  function setDefaultState() {
    setCartItems({});
    setTotal({ amount: 0, price: 0 });
  }
  return (
    <div>
      <div className={classes['cart-items']}>
        {Object.values(cartItems).map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div>
        <div className={classes.total}>
          <span>Total</span>
          <span>${total.price.toFixed(2)}</span>
        </div>
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={closeCart}>
            Close
          </button>
          <button className={classes.button} onClick={setDefaultState}>
            Order
          </button>
        </div>
      </div>
    </div>
  );
}
