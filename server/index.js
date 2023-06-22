const express = require('express');

const http = require('http');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const con = require("./config/db.js");

app.use(cors({ origin: true }));
// Set up rate limiter middleware
const limiter = rateLimit({
  windowMs: 60 * 1000, // 30 seconds
  max: 100, // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
});
app.use(limiter);

require('dotenv').config();

// connecting route to database
app.use(function (req, res, next) {
  req.con = con
  next()
})
app.use(express.static(__dirname + '/public'));

const PORT = 4000;
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const server = http.createServer(app);

// app.use('/', require('./middleware'));
app.use('/api/auth', require('./routes/auth')());

server.listen(PORT, function () {
  console.log('Server is running on Port: ' + PORT);
});
