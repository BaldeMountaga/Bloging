const mongoose = require('mongoose');

const ArticlesSchema = new mongoose.Schema ({
    id:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: String,
        require: true
    }
}, {timestamps: true});

ArticlesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._id
        delete returnedObject._v
    }
})
module.exports = mongoose.model('Article', ArticlesSchema);