const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true
    },
    wallet_address: {
        type:String,
        required: true
    },
    spaces :[]
});

const User = mongoose.model('User', UserSchema);
module.exports = User