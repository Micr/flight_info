const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static('build'));

app.get('/data', (req, res) => {
  fs.readFile(path.join(__dirname, 'data.json'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

app.get('*', (req, res) => {
  fs.readFile(path.join('build', 'index.html'), (err, file) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.send(file.toString());
    }
  });
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
