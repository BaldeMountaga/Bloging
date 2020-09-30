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
        type: String,
        minlength: 5,
        require: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
});

ArticlesSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id
        delete returnedObject._v
    }
})

module.exports = mongoose.model('Article', ArticlesSchema);