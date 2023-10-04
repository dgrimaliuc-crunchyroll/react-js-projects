import { useState, Fragment } from 'react';
import AddUser from './components/AddUser/AddUser.js';
import UserList from './components/UsersList/UsersList.js';
import ErrorModal from './components/ErrorModal/ErrorModal.js';

export default function App() {
  const [errorMessage, setErrorMessage] = useState('');
  const [userList, setUserList] = useState([]);
  const showErrorModal = (text) => {
    setErrorMessage(text);
  };
  const hideErrorModal = () => {
    setErrorMessage('');
  };

  function addUser(user) {
    setUserList((prev) => [user, ...prev]);
  }

  return (
    <Fragment>
      <AddUser addUser={addUser} showErrorModal={showErrorModal} />
      <UserList userList={userList} />
      <ErrorModal text={errorMessage} onClose={hideErrorModal} />
    </Fragment>
  );
}
