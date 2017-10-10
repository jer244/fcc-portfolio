//get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');

//get models
const User = require('./server/models/user');

//get API routes
const userRoutes = require('./server/routes/user');


//store env variables offline
require('dotenv').config();

//connect to the DB
mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST, {
    useMongoClient: true,
});
mongoose.Promise = global.Promise;

const app = express();

//parsers for post data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//point static path to dist folder
app.use(express.static(path.join(__dirname, 'dist')));

//set up routes
app.use('/user', userRoutes)

//catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//get port from environment and store in express
const port = process.env.PORT || '3000';
app.set('port', port);

//create HTTP server
const server = http.createServer(app);

//listen on provided port, on all network interfaces
server.listen(port, () => console.log( `API running on localhost: ${port}`));