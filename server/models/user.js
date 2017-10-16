const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

var userSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
});

/*userSchema.pre('save', function (next) {
    var user = this;
    //IF PASSWORD HASN'T CHANGED    
    if (!user.isModified('password')) return next();
    //GENERATE A SALT THEN HASH THE PASSWORD
    bcrypt.genSalt(10, function (err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function (err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        })
    })
});*/

userSchema.methods.validatePassword = function (password, cb) {
    bcrypt.compare(password, this.password, function(err, valid){
        if (err) return cb(err);
        cb(null, valid);
    })
}


var User = mongoose.model('User', userSchema);

module.exports = User;

