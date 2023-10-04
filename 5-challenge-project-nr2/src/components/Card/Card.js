import styles from './Card.module.css';
export default function Card({ className, children }) {
  const classes = `${styles.card} ${className ?? ''}`;
  return <div className={`${classes.trim()}`}>{children}</div>;
}
