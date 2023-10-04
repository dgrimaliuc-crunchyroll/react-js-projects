import Card from '../Card/Card';
import Button from '../Button/Button';
import styles from './AddUser.module.css';
import { useRef } from 'react';

export default function AddUser({ showErrorModal, addUser }) {
  const usernameRef = useRef();
  const ageRef = useRef();

  function processInput(user) {
    let username = user.username.trim();
    let age = user.age.trim();
    switch (true) {
      case username.length === 0:
        showErrorModal('Username cannot be empty');
        break;
      case age.length === 0:
        showErrorModal('Age cannot be empty');
        break;
      case +age < 1:
        showErrorModal('Age must be greater than 0');
        break;

      default:
        return 1;
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    let userInput = {
      username: usernameRef.current.value,
      age: ageRef.current.value,
    };

    if (!processInput(userInput)) {
      return;
    }
    addUser(userInput);
    usernameRef.current.value = '';
    ageRef.current.value = '';
  }

  return (
    <Card className={styles.input}>
      <form onSubmit={onSubmit}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' ref={usernameRef} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' ref={ageRef} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
}
