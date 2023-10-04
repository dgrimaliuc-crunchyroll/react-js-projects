import { Fragment } from 'react';
import Button from '../Button/Button';
import Card from '../Card/Card';
import styles from './ErrorModal.module.css';

import ReactDom from 'react-dom';

export default function ErrorModal({ text, onClose }) {
  if (!text) return;

  const Modal = ({ onClose }) => {
    return (
      <Card className={styles.modal}>
        <div className={styles.header}>
          <h2>Invalid input</h2>
        </div>
        <p className={styles.content}>{text}</p>
        <div className={styles.actions}>
          <Button onClick={onClose}>Okay</Button>
        </div>
      </Card>
    );
  };

  const Backdrop = ({ onClose }) => {
    return <div className={styles.backdrop} onClick={onClose} />;
  };

  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('backdrop')
      )}
      {ReactDom.createPortal(
        <Modal onClose={onClose} />,
        document.getElementById('error-modal')
      )}
    </Fragment>
  );
}
