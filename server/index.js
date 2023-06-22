const express = require('express');
const rateLimit = require('express-rate-limit');
const http = require('http');
var methodOverride = require("method-override")
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const con = require("./config/db.js");

app.use((req, res, next) => {
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000", // Allow requests from this origin only
    credentials: true, // Allow credentials (cookies, authentication headers)
  })
);
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
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

const PORT = 4000;
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

const server = http.createServer(app);
app.use('/auth', require('./routes/auth'));

server.listen(PORT, function () {
  console.log('Server is running on Port: ' + PORT);
});
