const mealsEndpoint =
  'https://react-http-96283-default-rtdb.firebaseio.com/meals.json';

async function fetchMeals() {
  const response = await fetch(mealsEndpoint);
  const data = await response.json();
  return Object.values(data)[0];
}

function postMeals(meals) {
  fetch('https://react-http-96283-default-rtdb.firebaseio.com/meals.json', {
    method: 'POST',
    body: JSON.stringify(meals),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export { fetchMeals, postMeals };
