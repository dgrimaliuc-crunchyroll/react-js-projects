import { useFetcher } from 'react-router-dom';
import classes from './NewsletterSignup.module.css';
import { useEffect, useRef, useState } from 'react';

function NewsletterSignup() {
  const fetcher = useFetcher();
  const email = useRef('');

  useEffect(() => {
    const data = fetcher.data;
    if (fetcher.state === 'idle' && data && data.message) {
      email.current.value = '';
      window.alert(data.message);
    }
  }, [email, fetcher.data, fetcher.state]);

  return (
    <fetcher.Form
      method='post'
      action='/newsletter'
      className={classes.newsletter}
    >
      <input
        type='email'
        name='email'
        ref={email}
        placeholder='Sign up for newsletter...'
        aria-label='Sign up for newsletter'
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
