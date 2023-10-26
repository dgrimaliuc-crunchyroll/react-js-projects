import { useContext } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';
import ActionsContext from '../../store/actionsContext';
import Cart from '../Cart/Cart';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

export default function Modal() {
  const isCartOpen = useSelector((state) => state.cart.isOpen);
  const { closeCart } = useContext(ActionsContext);
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
