import { useState } from 'react';
import useClassName from '../hooks/useClassName';

const SimpleInput = (props) => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [userNameIsTouched, setUserNameIsTouched] = useState(false);
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const isUserNameValid = userName.trim() !== '';
  const isEmailValid = email.trim() !== '' && email.includes('@');
  const isFormValid =
    userNameIsTouched || emailIsTouched
      ? isUserNameValid && isEmailValid
      : false;

  function onUsernameChangeHandler(event) {
    setUserName(event.target.value);
    setUserNameIsTouched(true);
  }

  function onEmailChangeHandler(event) {
    setEmail(event.target.value);
    setEmailIsTouched(true);
  }

  function onFormSubmitHandler(event) {
    event.preventDefault();
    setUserNameIsTouched(true);
    setEmailIsTouched(true);
    if (!isUserNameValid || !isEmailValid) {
      console.log('Invalid input');
      return;
    }
    console.log(userName);
    console.log(email);
    setUserName('');
    setEmail('');
    setUserNameIsTouched(false);
    setEmailIsTouched(false);
  }

  const userNameClasses = useClassName(!userNameIsTouched || isUserNameValid);
  const emailClasses = useClassName(!emailIsTouched || isEmailValid);
  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className={userNameClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          value={userName}
          onBlur={setUserNameIsTouched.bind(null, true)}
          onChange={onUsernameChangeHandler}
        />
        {userNameIsTouched && !isUserNameValid && (
          <p className='errorMessage'>Username must not be empty</p>
        )}
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          value={email}
          onBlur={setEmailIsTouched.bind(null, true)}
          onChange={onEmailChangeHandler}
        />
        {emailIsTouched && !isEmailValid && (
          <p className='errorMessage'>Email must not be empty and contain @</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
