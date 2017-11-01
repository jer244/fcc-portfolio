const express = require('express');
const router = express.Router();
const controllers = require('../controllers/user');
const passport = require('passport');

const User = require('../models/user');

//CREATE A USER
router.post('/signup', controllers.createUser);

//REGISTERED USER LOGIN
router.post('/login', controllers.loginUser);


module.exports = router;