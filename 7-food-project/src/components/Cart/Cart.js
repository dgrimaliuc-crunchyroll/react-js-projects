import classes from './Cart.module.css';
import CartItem from '../CartItem/CartItem';
import { useContext, useState } from 'react';
import CartContext from '../../store/cartContext';
import Checkout from '../Checkout/Checkout';
import OrderMessage from './OrderMessage';

export default function Cart() {
  const { cart, closeCart } = useContext(CartContext);
  const [isOrderSubitted, setIsOrderSubmitted] = useState(false);
  const [isOrderProcessing, setIsOrderProcessing] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);

  const cartItems = Object.values(cart.cartItems).map((item) => {
    return <CartItem key={item.id} item={item} />;
  });

  const preCheckoutActions = (
    <div className={classes.actions}>
      <button className={classes['button--alt']} onClick={closeCart}>
        Close
      </button>
      {cart.total.amount > 0 && (
        <button
          className={classes.button}
          onClick={setIsCheckout.bind(null, true)}
        >
          Order
        </button>
      )}
    </div>
  );

  function onOrderSubmitted() {
    setIsOrderProcessing(false);
    setIsOrderSubmitted(true);
  }

  if (isOrderProcessing || isOrderSubitted) {
    return (
      <OrderMessage
        isOrderSubitted={isOrderSubitted}
        isOrderProcessing={isOrderProcessing}
      />
    );
  }

  return (
    <>
      <div className={classes['cart-items']}>{cartItems}</div>
      <div>
        <div className={classes.total}>
          <span>Total</span>
          <span>${Math.abs(cart.total.price).toFixed(2)}</span>
        </div>
        {isCheckout && (
          <Checkout
            onSubmit={setIsOrderProcessing.bind(null, true)}
            onCancel={closeCart.bind(null)}
            onFinishSubmit={onOrderSubmitted}
          />
        )}
        {!isCheckout && preCheckoutActions}
      </div>
    </>
  );
}
