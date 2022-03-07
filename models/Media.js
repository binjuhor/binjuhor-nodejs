const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MediaSchema = new mongoose.Schema({
    title: {
        type: String
    },
    slug: {
        type: String
    },
    description: {
        type: String
    },
    path: {
        type: String
    },
    sizes: {
        type: [String]
    },
    status: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);
