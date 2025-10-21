// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Welcome to DevOps Stage 1 - GrizzleyBan!');
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
