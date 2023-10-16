import c from './Card.module.css';

export default function Card({ children, className }) {
  let classses = `${c.card} ${className || ''}`.trim();
  return <div className={classses}>{children}</div>;
}
