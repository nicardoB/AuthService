`use strict`

const express = require('express');
const app = express();
const port = 3000;
var auth = require('./routers/authRouter');

app.use('/auth', auth);

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});