const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/signup', signupUser);



const signUpUser = (req, res, next) => {
    User.findOne({ 'username': req.body.username }, (err, user) => {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (user) {
            return res.status(401).json({
                message: 'Username already in use'
            });
        } else {
            var newUser = new User();
            newUser.username = req.body.username;
            newUser.password = req.body.
        }
    }
    })
}
module.exports = router;