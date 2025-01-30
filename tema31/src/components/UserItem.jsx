import React from 'react';

function UserItem(props) {
  const { name, email, userName, phone } = props;

  return (
    <div>
      <h2>{name}</h2>
      <p>{email}</p>
      <h3>{userName}</h3>
      <h4>{phone}</h4>
    </div>
  );
}

export default UserItem;
