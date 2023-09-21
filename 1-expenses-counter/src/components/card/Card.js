import './Card.css';

export default function Card({ children, className }) {
  const classes = `card ${className}`.trim();
  return <div className={classes}>{children}</div>;
}
