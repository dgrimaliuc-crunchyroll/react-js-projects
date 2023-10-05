import React, { useState, useEffect, useReducer, useRef } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';
import { useContext } from 'react';
import AuthContext from '../../store/auth-context';

const initialFormState = {
  password: '',
  email: '',
  isEmailValid: null,
  isPasswordValid: null,
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

const Login = () => {
  const ctx = useContext(AuthContext);

  const [formIsValid, setFormIsValid] = useState(false);
  const [formState, dispatchForm] = useReducer(formReducer, initialFormState);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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

  useEffect(() => {
    emailInputRef.current.focus();
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    ctx.onLogIn(formState.email, formState.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input
          ref={emailInputRef}
          value={formState.email}
          isValid={formState.isEmailValid}
          onChangeHandler={emailChangeHandler}
          type='email'
          text='E-Mail'
        />
        <Input
          ref={passwordInputRef}
          value={formState.password}
          isValid={formState.isPasswordValid}
          onChangeHandler={passwordChangeHandler}
          type='password'
          text='Password'
        />
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
