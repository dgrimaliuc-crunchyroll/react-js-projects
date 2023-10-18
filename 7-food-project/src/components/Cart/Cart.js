import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import { useContext } from 'react';
import CartContext from '../../store/cartContext';

export default function Cart() {
  const { cart, closeCart, setInitialState } = useContext(CartContext);

  function makeOrder() {
    setInitialState();
    closeCart();
  }
const cartItems = Object.values(cart.cartItems).map((item) => {
  return <CartItem key={item.id} item={item} />;
});

return (
  <div>
    <div className={classes['cart-items']}>{cartItems}</div>
    <div>
      <div className={classes.total}>
        <span>Total</span>
        <span>${Math.abs(cart.total.price).toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={closeCart}>
          Close
        </button>
        {cart.total.amount > 0 && (
          <button className={classes.button} onClick={makeOrder}>
            Order
          </button>
        )}
      </div>
    </div>
  </div>
);
}
