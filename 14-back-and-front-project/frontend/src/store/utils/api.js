const host = 'http://localhost:8080/events';

export async function getEvent(id) {
  const response = await fetch(`${host}/${id}`);
  if (!response.status === 200) {
    throw new Error('Could not fetch event.');
  }
  return await response.json();
}
