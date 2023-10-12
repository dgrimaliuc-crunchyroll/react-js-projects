import { Fragment, useContext } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import StoreContext from '../../store/storeContext';
import Cart from '../Cart/Cart';
import Card from '../Card/Card';

export default function Modal() {
  const { cartItems, isCartOpen, closeCart } = useContext(StoreContext);
  if (!isCartOpen) return null;
  return (
    <Fragment>
      {createPortal(
        <div className={classes.backdrop} onClick={closeCart} />,
        document.getElementById('backdrop')
      )}
      {createPortal(
        <Card className={classes.modal}>
          <Cart items={cartItems} />
        </Card>,
        document.getElementById('modal')
      )}
    </Fragment>
  );
}
