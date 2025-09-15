import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(null);

  useEffect(() => {
  fetch("/users")
    .then(res => res.json())
    .then(data => setUsers(data));

  fetch("/status")
    .then(res => res.json())
    .then(data => setStatus(data.message));
}, []);


  return (
    <div style={{ fontFamily: "Arial", textAlign: "center", marginTop: "40px" }}>
      <h1>🚀 DevOps React + Nginx + Microservices</h1>
      <p>Running on AWS EC2 (3.90.120.45)</p>

      <section style={{ marginTop: "24px" }}>
        <h2>Service Status</h2>
        <pre>{status ? JSON.stringify(status, null, 2) : "Loading..."}</pre>
      </section>

      <section style={{ marginTop: "24px" }}>
        <h2>Users</h2>
        {users.length === 0 ? (
          <p>No users</p>
        ) : (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {users.map((u) => (
              <li key={u.id}>
                {u.name} — {u.role}
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

export default App;
