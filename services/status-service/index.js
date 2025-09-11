const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 5002;
app.get('/api/status', (req, res) => {
  res.json({ status: "ok", uptime: process.uptime(), host: os.hostname(), time: new Date() });
});
app.listen(port, () => console.log(`Status service on ${port}`));
