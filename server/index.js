const express = require('express');

const app = express();

app.get('/hello', (req, res) => {
   res.send('hello ');
});

app.listen(1337, () => {
   console.log('listening on 1337');
});
