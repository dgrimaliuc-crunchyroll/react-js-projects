import classes from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import { useContext, useState } from 'react';
import CartContext from '../../store/cartContext';
import Checkout from '../Checkout/Checkout';

export default function Cart() {
  const { cart, closeCart } = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  function makeOrder() {
    setIsCheckout(true);
  }
  const cartItems = Object.values(cart.cartItems).map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  const preCheckoutActions = (
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
  );

  return (
    <div>
      <div className={classes['cart-items']}>{cartItems}</div>
      <div>
        <div className={classes.total}>
          <span>Total</span>
          <span>${Math.abs(cart.total.price).toFixed(2)}</span>
        </div>
        {isCheckout && (
          <Checkout onCancel={closeCart.bind(null)} />
        )}
        {!isCheckout && preCheckoutActions}
      </div>
    </div>
  );
}
