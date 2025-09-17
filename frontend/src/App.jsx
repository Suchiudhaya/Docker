import React, { useEffect, useState } from "react";
import axios from "axios";
import UsersList from "./components/UsersList";
import StatusList from "./components/StatusList";

const App = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState([]);

  useEffect(() => {
    axios.get("/users").then(res => setUsers(res.data)).catch(err => console.error(err));
    axios.get("/status").then(res => setStatus(res.data)).catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Users</h1>
      <UsersList users={users} />
      <h1>Status</h1>
      <StatusList status={status} />
    </div>
  );
};

export default App;
