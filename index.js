const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;

app.get('/', (req, res) => {
  return res.send('hello world');
});

app.listen(port, () => {
  console.log('🤬🤬🤬🤬🤬🤬🤬');
});