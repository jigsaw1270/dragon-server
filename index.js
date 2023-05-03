const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;

const categories = require('./categories.json');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Dragon is running')
});

app.get('/categories',(req,res) => {
    res.send(categories);
});

app.listen(port, () => {
  console.log(` Dragon api running on port : ${port}`)
})