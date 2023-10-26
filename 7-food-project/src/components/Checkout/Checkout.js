import useClassName from '../../hooks/useClassName';
import useInput from '../../hooks/useInput';
import classes from './Checkout.module.css';
import CheckoutInput from './CheckoutInput';
import { postOrder } from '../../httpUtils/httpUtils';
import { useContext } from 'react';
import CartContext from '../../store/cartContext';
import CartActionsContext from '../../store/cartActionsContext';

const Checkout = (props) => {
  const { cart, setInitialState, getOrCreateUser, saveUserData } =
    useContext(CartContext);

  const { closeCart } = useContext(CartActionsContext);

  let currentUser = getOrCreateUser();

  const [
    name,
    hasNameError,
    isNameValid,
    isNameTouched,
    setNameIsTouched,
    nameChangeHandler,
  ] = useInput(currentUser.name);

  const [
    street,
    hasStreetError,
    isStreetValid,
    isStreetTouched,
    setIsStreetTouched,
    streetChangeHandler,
  ] = useInput(currentUser.street);

  const [
    postalCode,
    hasPostalCodeError,
    isPostalCodeValid,
    isPostalCodeTouched,
    setIsPostalCodeTouched,
    postalCodeChangeHandler,
  ] = useInput(currentUser.postalCode);

  const [
    city,
    hasCityError,
    isCityValid,
    isCityTouched,
    setIsCityTouched,
    cityChangeHandler,
  ] = useInput(currentUser.city);

  const nameClasses = useClassName(classes, !isNameTouched || isNameValid);
  const streetClasses = useClassName(
    classes,
    isStreetValid || !isStreetTouched
  );
  const postalCodeClasses = useClassName(
    classes,
    !isPostalCodeTouched || isPostalCodeValid
  );
  const cityClasses = useClassName(classes, !isCityTouched || isCityValid);

  const confirmOrder = (event) => {
    event.preventDefault();
    if (!isFormValid) return;
    saveUserData({
      name: name.trim(),
      street: street.trim(),
      postalCode: postalCode.trim(),
      city: city.trim(),
    });
    props.onSubmit();
    postOrder(cart, { ...getOrCreateUser(), date: new Date() }).then(() => {
      console.log('Order submitted');
      props.onFinishSubmit();
      setTimeout(() => {
        closeCart();
      }, 3000);
    });
    setInitialState();
  };

  let isFormValid = false;
  if (isStreetValid && isPostalCodeValid && isNameValid && isCityValid) {
    isFormValid = true;
  }
  return (
    <form className={classes.form} onSubmit={confirmOrder}>
      <CheckoutInput
        id='name'
        className={nameClasses}
        title='Your Name'
        value={name}
        onChange={nameChangeHandler}
        onBlur={setNameIsTouched}
        hasError={hasNameError}
      />
      <CheckoutInput
        id='street'
        className={streetClasses}
        title='Street'
        value={street}
        onChange={streetChangeHandler}
        onBlur={setIsStreetTouched}
        hasError={hasStreetError}
      />
      <CheckoutInput
        id='postal'
        className={postalCodeClasses}
        title='Postal Code'
        value={postalCode}
        onChange={postalCodeChangeHandler}
        onBlur={setIsPostalCodeTouched}
        hasError={hasPostalCodeError}
      />
      <CheckoutInput
        id='city'
        className={cityClasses}
        title='City'
        value={city}
        onChange={cityChangeHandler}
        onBlur={setIsCityTouched}
        hasError={hasCityError}
      />

      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button
          className={classes.submit}
          disabled={!isFormValid}
          type='submit'
        >
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
