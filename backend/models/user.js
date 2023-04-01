const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    fname: {
        type: String,
        default: '',
    },
    lname: {
        type: String,
        default: '',
    },
    username: {
        type: String,
        default: '',
    },
    email: {
        type: String,
        default: '',
    },
    password: {
        type: String,
        default: '',
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User