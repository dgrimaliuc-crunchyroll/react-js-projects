import useClassName from '../hooks/useClassName';
import useInput from '../hooks/useInput';

const BasicForm = (props) => {
  const [
    firstName,
    isFNValid,
    isFNTouched,
    firstNameHasError,
    setFNTouched,
    onFirstNameChange,
    resetFirstName,
  ] = useInput((value) => value.trim() !== '');

  const [
    lastName,
    isLNValid,
    isLNTouched,
    lastNameHasError,
    setLNTouched,
    onLastNameChange,
    resetLastName,
  ] = useInput((value) => value.trim() !== '');

  const [
    email,
    isEmailValid,
    isEmailTouched,
    emailHasError,
    setEmailTouched,
    onEmailChange,
    resetEmail,
  ] = useInput((value) => value.trim() !== '' && value.includes('@'));

  const firsNameClasses = useClassName(!isFNTouched || isFNValid);
  const lastNameClasses = useClassName(!isLNTouched || isLNValid);
  const emailClasses = useClassName(!isEmailTouched || isEmailValid);

  const isFormValid =
    isFNTouched || isLNTouched || isEmailTouched
      ? isFNValid && isLNValid && isEmailValid
      : false;

  console.log(isFormValid);

  function onSubmitForm(event) {
    event.preventDefault();
    if (!isFNValid || !isLNValid || !isEmailValid) {
      return;
    }
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    resetFirstName();
    resetLastName();
    resetEmail();
  }

  return (
    <form onSubmit={onSubmitForm}>
      <div className='control-group'>
        <div className={firsNameClasses}>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            id='first-name'
            value={firstName}
            onChange={onFirstNameChange}
            onBlur={setFNTouched.bind(null, true)}
          />
          {firstNameHasError && (
            <p className='errorMessage'>First Name must not be empty</p>
          )}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='last-name'
            value={lastName}
            onChange={onLastNameChange}
            onBlur={setLNTouched.bind(null, true)}
          />
          {lastNameHasError && (
            <p className='errorMessage'>Last Name must not be empty</p>
          )}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='email'>E-Mail Address</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={onEmailChange}
          onBlur={setEmailTouched.bind(null, true)}
        />
        {emailHasError && (
          <p className='errorMessage'>
            Email must not be empty and must contain @
          </p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
