const mongoose = require('mongoose');

const SessionSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: type,
    },
    spaces: {
        type: String,
        required: true
    },
    session_type: {
        type: String,
        requried: true,
        defalut: "Meet"
    }
}, {
    timestamps: true,
});

const Logs = mongoose.model('Logs', LogsSchema);
module.exports = Logs;