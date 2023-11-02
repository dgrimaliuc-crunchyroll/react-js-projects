import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';

function EventItem({ event, showBody = true }) {
  const submit = useSubmit();
  function startDeleteHandler() {
    const proceed = window.confirm(
      'Are you sure you want to delete this event?'
    );
    if (proceed) {
      submit(null, { method: 'delete' }); // the same as in Form
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      {showBody === true && (
        <>
          <h1>{event.title}</h1>
          <time>{event.date}</time>
          <p>{event.description}</p>

          <menu className={classes.actions}>
            <Link to='edit'>Edit</Link>(
            <button onClick={startDeleteHandler}>Delete</button>)
          </menu>
        </>
      )}
    </article>
  );
}

export default EventItem;
