import classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';

export default function HeaderCartButton({ openCart }) {
  return (
    <div className={classes.bump}>
      <button
        className={classes.button}
        onClick={() => {
          openCart();
        }}
      >
        <CartIcon />
        Your Cart
        <div className={classes.badge}>0</div>
      </button>
    </div>
  );
}
