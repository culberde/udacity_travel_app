// const dotenv = require('dotenv');
// dotenv.config();
var path = require('path');

// Include the express module and instantiate an instance of the app
const express = require('express');
const app = express();

// Set up middle-ware
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

// Set listening port and launch server
const port = 8082;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

// Sample GET route
app.post('/add', (req, res) => {
  console.log('Received');
  console.log(req.body);
  res.send('Received');
});
