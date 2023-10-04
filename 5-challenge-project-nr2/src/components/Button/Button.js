import styles from './Button.module.css';
export default function Button({ children, onClick, className }) {
  const classes = `${styles.button}${className ? ` ${className}` : ''}`;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
