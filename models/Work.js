const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkSchema = new mongoose.Schema({
    category: {
        type: Schema.Types.ObjectId,
        ref: 'category'
    },
    title: {
        type: String
    },
    slug: {
        type: String
    },
    position: {
        type: String
    },
    description: {
        type: String
    },
    content: {
        type: String
    },
    media: {
        type: Schema.Types.ObjectId,
        ref: 'media'
    },
    tech_stack: {
        type: [String]
    },
    project_url: {
        type: String
    },
    date_start: {
        type: Date,
        default: Date.now
    },
    date_end: {
        type: Date,
        default: Date.now
    },
    likes: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            }
        }
    ],
    comments: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'user'
            },
            text: {
                type: String,
                required: true
            },
            name: {
                type: String
            },
            avatar: {
                type: String
            },
            date: {
                type: Date,
                default: Date.now
            }
        }
    ]
});
module.exports = Profile = mongoose.model('profile', ProfileSchema);
