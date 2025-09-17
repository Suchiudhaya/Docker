import React from "react";

const UsersList = ({ users }) => (
  <ul>
    {users.map(u => (
      <li key={u.id}>{u.name}</li>
    ))}
  </ul>
);

export default UsersList;
