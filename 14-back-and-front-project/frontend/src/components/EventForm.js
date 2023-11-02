import {
  Form,
  json,
  redirect,
  useNavigate,
  useNavigation,
  useActionData,
} from 'react-router-dom';

import classes from './EventForm.module.css';

export async function submitEventAction({ request, params }) {
  const data = await request.formData();

  const newEvent = {
    title: data.get('title'),
    description: data.get('description'),
    image: data.get('image'),
    date: data.get('date'),
  };

  let url = `http://localhost:8080/events`;
  if (request.method === 'PATCH') {
    url += `/${params.eventId}`;
  }

  const resp = await fetch(url, {
    method: request.method,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newEvent),
  });

  if (resp.status === 422) {
    return resp;
  }

  if (!resp.ok) {
    throw json(
      {
        message: `Could not create event. ${resp.statusText}`,
      },
      { status: resp.status }
    );
  }
  return redirect('/events');
}

function EventForm({ method, event }) {
  const actionData = useActionData();

  const navigate = useNavigate();
  const navigation = useNavigation();
  function cancelHandler() {
    navigate('..', { relative: 'path' });
  }

  const isSubmitting = navigation.state === 'submitting';

  return (
    // yoou can use action='/events' and then action for this path will be applied
    <Form method={method} className={classes.form}>
      {actionData && actionData.errors && (
        <ul>
          {Object.values(actionData.errors).map((err) => (
            <li key={err}>{err}</li>
          ))}
        </ul>
      )}

      <p>
        <label htmlFor='title'>Title</label>
        <input
          id='title'
          type='text'
          name='title'
          required
          defaultValue={event ? event.title : ''}
        />
      </p>
      <p>
        <label htmlFor='image'>Image</label>
        <input
          id='image'
          type='url'
          name='image'
          required
          defaultValue={event ? event.image : ''}
        />
      </p>
      <p>
        <label htmlFor='date'>Date</label>
        <input
          id='date'
          type='date'
          name='date'
          required
          defaultValue={event ? event.date : '2023-10-10'}
        />
      </p>
      <p>
        <label htmlFor='description'>Description</label>
        <textarea
          id='description'
          name='description'
          rows='5'
          required
          defaultValue={event ? event.description : ''}
        />
      </p>
      <div className={classes.actions}>
        <button type='button' onClick={cancelHandler}>
          Cancel
        </button>
        <button disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Save'}
        </button>
      </div>
    </Form>
  );
}

export default EventForm;
