const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true,
        trim: true,
    },
    post_id: {
        type: String
    },
    author: {
        type: String
    },
    created_by: {
        type: String
    },
}, {
    timestamps: true,
});

const Comment = mongoose.model('Comment', CommentSchema);
module.exports = Comment;