const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportJWT = require('passport-jwt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;

var jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();

router.post('/signup', function (req, res, next) {
    User.findOne({ 'username': req.body.username }, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (user) {
            return res.status(401).json({ message: 'Username already in use' });
        } else {
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.password = req.body.password;
            newUser.save(function (err, newUser) {
                if (err) {
                    return done(err, false);
                }
                var token = jwt.sign({ id: newUser._id, username:  newUser.username }, process.env.JWT_KEY, { expiresIn: '24h' });
                res.json({
                    message: 'User Created',
                    token: token,
                    payload: jwt.decode(token)
                })
            })
        }
    })
});

module.exports = router;