import useClassName from '../hooks/useClassName';
import useInput from '../hooks/useInput';

const SimpleInput = (props) => {
  const [
    userName,
    isUserNameValid,
    userNameIsTouched,
    usernameHasError,
    setUserNameIsTouched,
    onUsernameChangeHandler,
    resetUserNameInput,
  ] = useInput((value) => value.trim() !== '');

  const [
    email,
    isEmailValid,
    emailIsTouched,
    emailHasError,
    setEmailIsTouched,
    onEmailChangeHandler,
    resetEmailInput,
  ] = useInput((value) => value.trim() !== '' && value.includes('@'));

  const isFormValid =
    userNameIsTouched || emailIsTouched
      ? isUserNameValid && isEmailValid
      : false;

  function onFormSubmitHandler(event) {
    event.preventDefault();
    if (!isUserNameValid || !isEmailValid) {
      return;
    }
    console.log(userName);
    console.log(email);
    resetUserNameInput();
    resetEmailInput();
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
        {usernameHasError && (
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
        {emailHasError && (
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
