const mongoose = require('mongoose');

const ArticlesSchema = new mongoose.Schema ({
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        minlength: 10,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ],
    disLikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    ]
});

ArticlesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject._v
    }
})

module.exports = mongoose.model('Article', ArticlesSchema);