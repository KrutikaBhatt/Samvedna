const mongoose = require('mongoose');

const LogsSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
    user_id: {
        type: String,
        required: type,
    },
    mood: {
        type: Integer,
        required: true,
        default: 3,
    },
}, {
    timestamps: true,
});

const Logs = mongoose.model('Logs', LogsSchema);
module.exports = Logs;