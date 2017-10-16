//GET DEPENDENCIES
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passport = require('passport');

//GET MODELS
const User = require('./server/models/user');

//GET API ROUTES
const userRoutes = require('./server/routes/user');

//ENABLE STORAGE OF OFFLINE VARIABLES OFF OF GITHUB
require('dotenv').config();

//CONNECT TO DB
mongoose.connect('mongodb://' + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.DB_HOST, {
      useMongoClient: true,
});
mongoose.Promise = global.Promise;

const app = express();

//INITIALIZE PASSPORT 
require('./server/config/passport');
app.use(passport.initialize());

//PARSERS FOR POST DATA
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//POINT STATIC PATH TO DIST FOLDER
app.use(express.static(path.join(__dirname, 'dist')));

//SET UP ROUTES
app.use('/user', userRoutes)

//CATCH ALL OTHER ROUTES AND RETURN THE INDEX FILE
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//GET PORT FROM ENVIRONMENT AND STORE IN EXPRESS
const port = process.env.PORT || '3000';
app.set('port', port);

//CREATE HTTP SERVER
const server = http.createServer(app);

//LISTEN TO PROVIDED PORT ON ALL NETWORK INTERFACES
server.listen(port, () => console.log( `API running on localhost: ${port}`));