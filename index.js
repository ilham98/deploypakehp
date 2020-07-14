const express = require('express');
const app = express();
const port = process.env.port || 80;

app.get('/', (req, res) => {
  return res.send('hello world');
});

app.listen(port, () => {
  console.log('🤬🤬🤬🤬🤬🤬🤬');
});