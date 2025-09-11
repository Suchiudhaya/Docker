import React, {useEffect, useState} from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    fetch("http://3.90.120.45:8080/api/users")
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(() => setUsers([]));

    fetch("http://3.90.120.45:8080/api/status")
      .then(res => res.json())
      .then(data => setStatus(data))
      .catch(() => setStatus(null));
  }, []);

  return (
    <div style={ fontFamily: "Arial", textAlign: "center", marginTop: "40px" }>
      <h1>🚀 DevOps React + Nginx + Microservices</h1>
      <p>Running on AWS EC2 (3.90.120.45)</p>
      <h2>Status</h2>
      <pre>{status ? JSON.stringify(status, null, 2) : "Loading..."}</pre>
      <h2>Users</h2>
      {users.length === 0 ? <p>No users</p> : (
        <ul>{users.map(u => <li key={u.id}>{u.name} — {u.role}</li>)}</ul>
      )}
    </div>
  );
}

export default App;
