import Card from '../Card/Card';
import styles from './UsersList.module.css';
export default function UserList({ userList }) {
  if (userList.length === 0) return;
  return (
    <Card className={styles.users}>
      <ul>
        {userList.map((user, index) => {
          return (
            <li key={index}>
              {user.username} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}
