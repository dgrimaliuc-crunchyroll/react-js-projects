const host = 'https://react-http-96283-default-rtdb.firebaseio.com/';

const mealsEndpoint = `${host}meals.json`;
const ordersEndpoint = `${host}orders.json`;

async function fetchMeals() {
  const response = await fetch(mealsEndpoint);
  if (!response.ok) {
    throw new Error(
      'Something went wrong!\n' + response.status + ' ' + response.statusText
    );
  }
  const data = await response.json();
  return Object.values(data)[0];
}

function postOrder(meals, user) {
  fetch(ordersEndpoint, {
    method: 'POST',
    body: JSON.stringify({ items: meals, user }),
  });
}

function postMeals(meals) {
  fetch(mealsEndpoint, {
    method: 'POST',
    body: JSON.stringify(meals),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export { fetchMeals, postMeals, postOrder };
