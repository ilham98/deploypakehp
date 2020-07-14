const http = require('http');
const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const path = require("path");

app.use(express.static(process.cwd() + "/myapp/dist/myapp/"));

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname + "/myapp/dist/myapp/index.html"));
});

app.listen(port, () => {
  console.log('🤬🤬🤬🤬🤬🤬🤬');
});