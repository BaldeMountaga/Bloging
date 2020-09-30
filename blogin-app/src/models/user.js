const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const { use } = require('../controllers/app');
const { delete, delete } = require('../controllers/userRouter');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    name: String,
    passwordHash: String,

    articles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Article'
        }
    ]
});

userSchema.plugin(uniqueValidator);

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()

        delete returnedObject._id
        delete returnedObject._v
        delete returnedObject.passwordHash
    }
});