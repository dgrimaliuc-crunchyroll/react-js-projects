import classes from './EventItem.module.css';
import { Link } from 'react-router-dom';

function EventItem({ event, showActions = true }) {
  console.log(event);
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      {showActions === true && (
        <menu className={classes.actions}>
          <Link to='edit' relative='path'>
            Edit
          </Link>
          (<button onClick={startDeleteHandler}>Delete</button>)
        </menu>
      )}
    </article>
  );
}

export default EventItem;
