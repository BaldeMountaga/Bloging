const mongoose = require ('mongoose');

const newBlog = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
        //Ask how to specif the length 
    }
})

//how handle also comment
module.exports = mongoose.model('newBlog', newBlog)