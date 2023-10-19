import PropTypes from 'prop-types';

import classes from './FlashMessage.module.css';

const FLASH_MESSAGE_TYPES = { error: 'error', success: 'success' };

const typeClasses = {
  success: classes['flash-message'],
  error: classes.flashMessageIsSuccess,
};

export default function FlashMessage(props) {
  function getDerivedStateFromProps() {
    if (message) {
      return { message, isActive: true };
    }

    return { isActive: false };
  }

  function componentDidUpdate(prevProps) {
    const { message, timeoutExpiration } = props;
    const { message: prevMessage, timeoutExpiration: prevTimeoutExpiration } =
      prevProps;

    if (!message) {
      this.clearTimeout();
    }

    if (
      (message && message !== prevMessage) ||
      timeoutExpiration !== prevTimeoutExpiration
    ) {
      // createTimeout();
    }
  }

  function createTimeout() {
    const { timeoutExpiration, onClose } = props;

    this.clearTimeout();
    this.timeout = setTimeout(() => {
      onClose();
    }, timeoutExpiration);
  }

  const { type, onClose, message, isActive } = props;

  if (!message && !isActive) return null;

  const flashClassNames = typeClasses[type];

  return (
    <div className={flashClassNames} data-t='flash-message'>
      <div className={classes.wrapper}>
        <div className={classes.text}>{message}</div>
      </div>
      <button className={classes.dismiss} type='button' onClick={onClose}>
        Close
        <div className={classes.closeIcon} />
      </button>
    </div>
  );
}

FlashMessage.propTypes = {
  message: PropTypes.string.isRequired,
  timeoutExpiration: PropTypes.number.isRequired,
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.values(FLASH_MESSAGE_TYPES)),
  onClose: PropTypes.func,
};

FlashMessage.defaultProps = {
  type: FLASH_MESSAGE_TYPES.success,
  onClose: () => {},
};
