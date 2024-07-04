import Link from 'next/link';
import { users } from '@/data/users';

const UsersList = () => {
  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              {user.email}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
