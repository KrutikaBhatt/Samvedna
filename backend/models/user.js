const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    wallet_address: {
        type:String,
        required: true
    },
    spaces :[{
        type: String,
    }]
});

const User = mongoose.model('User', UserSchema);
module.exports = User