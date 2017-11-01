const User = require('../models/user');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

const createUser = (req, res, next) => {
    User.findOne({ 'username': req.body.username }, (err, user) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (user) {
            return res.status(401).json({ message: 'username already in use' });
        } else {
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.password = req.body.password;
            //PASSWORD WILL BE HASHED WITH .pre MIDDLEWARE
            newUser.save((err, newUser) => {
                if (err) {
                    console.log(err);
                    return done(err, false);
                }
                var token = jwt.sign({ id: newUser._id, username: newUser.username }, process.env.JWT_KEY, { expiresIn: '24h' });
                res.json({ message: 'User created', token: token });
            })
        }
    });
}

const loginUser = (req, res, next) => {
    User.findOne({ 'username': req.body.username }, (err, user) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (user) {
            user.validatePassword(req.body.password, (err, isMatch) => {
                if (err) {
                    return res.status(500).json({
                        title: 'An error occurred',
                        error: err
                    });
                }
                if (isMatch) //PASSWORD A MATCH
                {
                    var token = jwt.sign({ id: user._id, username: user.username },
                        process.env.JWT_KEY,
                        { expiresIn: '24h' });
                    return res.json({
                        message: 'User Logged In',
                        token: token
                    });
                } else //PASSWORD NOT A MATCH
                {
                    return res.status(401).json({
                        message: 'Incorrect username or password'
                    })
                }
            })
        } else //USER NOT FOUND
        {
            return res.status(401).json({
                message: 'Incorrect username or password'
            })
        }
    })
}

exports.createUser = createUser;
exports.loginUser = loginUser;