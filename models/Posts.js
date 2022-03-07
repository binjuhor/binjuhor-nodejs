const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    slug: {
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
    status: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    },
    updated_at: {
        type: Date,
        default: Date.now
    },
    deleted_at: {
        type: Date,
        default: null
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
})

module.exports = Posts = mongoose.model('post', PostSchema)
