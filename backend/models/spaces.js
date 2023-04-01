const mongoose = require('mongoose');

const SpacesSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    image_url : {
        type: String,
        required: true,
        trim: true,
    },
    created_by: {
        type: String,
        required : true,
        trim : true,
    },
}, {
    timestamps: true,
});

const Spaces = mongoose.model('Spaces', SpacesSchema);
module.exports = Spaces