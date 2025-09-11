const express = require('express');
const app = express();
const port = process.env.PORT || 5001;
const users = [
  { id: 1, name: "Alice", role: "admin" },
  { id: 2, name: "Bob", role: "developer" },
  { id: 3, name: "Carol", role: "qa" }
];
app.get('/api/users', (req, res) => res.json(users));
app.listen(port, () => console.log(`Users service on ${port}`));
