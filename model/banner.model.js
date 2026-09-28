const mongoose = require('mongoose');

const bannerSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bannerbtn_1: {
        type: String,
        required: true
    },
    bannerbtn_2: {
        type: [String],
        required: true
    },
    image: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Banner', bannerSchema);
 