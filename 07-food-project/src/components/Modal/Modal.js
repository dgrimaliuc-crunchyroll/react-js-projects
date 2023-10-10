import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';

export default function Modal({ cartItems, isCartOpen, closeCart }) {
  if (!isCartOpen) return null;
  return (
    <Fragment>
      {createPortal(
        <div className={classes.backdrop} onClick={closeCart} />,
        document.getElementById('backdrop')
      )}
      {createPortal(
        <div className={classes.modal}>
          {cartItems.map((m, index) => (
            <div key={index}>item {m}</div>
          ))}
          <div>
            <button onClick={closeCart}>Close</button>
          </div>
        </div>,
        document.getElementById('modal')
      )}
    </Fragment>
  );
}
