import { json, redirect, useLoaderData } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function authAction({ request }) {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';
  const formData = await request.formData();

  if (!['login', 'signup'].includes(mode)) {
    console.log('Invalid mode: ' + mode);
    throw json({ message: `Invalid mode: '${mode}'.` }, { status: 422 });
  }
  await sleep(500);

  const response = await fetch('http://localhost:8080/' + mode, {
    method: 'POST',
    body: JSON.stringify({
      email: formData.get('email'),
      password: formData.get('password'),
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
    const data = await response.json();
    localStorage.setItem('token', data.token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());

    return redirect('/');
  } else if ([422, 401].includes(response.status)) {
    return response;
  } else {
    const data = await response.json();
    throw new Error(data.message, { status: response.status });
  }
}

function AuthenticationPage() {
  return <AuthForm />;
}

export default AuthenticationPage;
