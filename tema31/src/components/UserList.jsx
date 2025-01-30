import React from 'react';
import UserItem from './UserItem';

export function UserList(props) {
  const { users } = props;

  return (
    <div>
      {users.map((user, index) => {
        return <UserItem key={index} name={user.name} email={user.email} userName={user.username} phone= {user.phone} />;
      })}
    </div>
  );
}
