import { cartActions } from '../../store/cart';

const cartURL =
  'https://react-http-96283-default-rtdb.firebaseio.com/cart.json';
export function updateCart(cart) {
  return async (dispatch) => {
    await fetch(cartURL, {
      method: 'PUT',
      body: JSON.stringify({ cartItems: cart.cartItems, total: cart.total }),
    });
  };
}

export function getCart() {
  return async (dispatch) => {
    await fetch(cartURL, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(cartActions.setState(data));
      });
  };
}
