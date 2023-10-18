import { useContext } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import CartContext from '../../store/cartContext';
import Cart from '../Cart/Cart';
import Card from '../Card/Card';

export default function Modal() {
  const { isCartOpen, closeCart } = useContext(CartContext);
  if (!isCartOpen) return null;
  return (
    <>
      {createPortal(
        <>
          <div className={classes.backdrop} onClick={closeCart} />
          <Card className={classes.modal}>
            <Cart />
          </Card>
        </>,
        document.getElementById('modal')
      )}
    </>
  );
}
