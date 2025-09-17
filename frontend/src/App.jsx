import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState({});

  useEffect(() => {
    fetch('http://users-service:5001/users')
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error(err));

    fetch('http://status-service:5002/status')
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>DevOps React App</h1>
      <h2>Status</h2>
      <pre>{JSON.stringify(status, null, 2)}</pre>
      <h2>Users</h2>
      <ul>
        {users.map(u => <li key={u.id}>{u.name}</li>)}
      </ul>
    </div>
  );
}

export default App;
