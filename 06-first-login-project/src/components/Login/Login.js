import React, { useState, useEffect, useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const initialFormState = {
  password: '',
  email: '',
  isEmailValid: undefined,
  isPasswordValid: undefined,
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'USER_INPUT_EMAIL':
      return {
        ...state,
        email: action.value,
        isEmailValid: action.value.includes('@'),
      };
    case 'USER_INPUT_PASSWORD':
      return {
        ...state,
        password: action.value,
        isPasswordValid: action.value.length > 6,
      };
    default:
      return initialFormState;
  }
};

const Login = (props) => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [formState, dispatchForm] = useReducer(formReducer, initialFormState);

  useEffect(() => {
    const id = setTimeout(() => {
      console.log('checking form validity');
      setFormIsValid(formState.isEmailValid && formState.isPasswordValid);
    }, 500);

    return () => {
      console.log('clean up');
      clearTimeout(id);
    };
  }, [formState.isEmailValid, formState.isPasswordValid]);

  const emailChangeHandler = (event) => {
    dispatchForm({ value: event.target.value, type: 'USER_INPUT_EMAIL' });
  };

  const passwordChangeHandler = (event) => {
    dispatchForm({ value: event.target.value, type: 'USER_INPUT_PASSWORD' });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(formState.email, formState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            formState.isEmailValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='email'>E-Mail</label>
          <input
            type='email'
            id='email'
            value={formState.email}
            onChange={emailChangeHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            formState.isPasswordValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={formState.password}
            onChange={passwordChangeHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type='submit' className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
