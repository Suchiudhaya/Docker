// frontend/src/App.jsx
import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_USERS_API}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error("Users API error:", err));

    fetch(`${process.env.REACT_APP_STATUS_API}/status`)
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(err => console.error("Status API error:", err));
  }, []);

  return (
    <div>
      <h1>Docker DevOps Web App</h1>
      <h2>Users</h2>
      <pre>{JSON.stringify(users, null, 2)}</pre>
      <h2>Status</h2>
      <pre>{JSON.stringify(status, null, 2)}</pre>
    </div>
  );
}

export default App;
