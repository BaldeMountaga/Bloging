const express = require('express');
const data = require('../models/data');
const blogPosts = require('./db.json');   //Blog Database
const { post } = require('./userRouter');
const postsRouter = require.Router();


postsRouter.get('/', (req, res) => {
    res.send("Hello User, welcome to my blogging world");
})


postsRouter.get('/posts/id:', (req, res) => {
    const blogId = Number(req.params.id);
    const blogRequest = blogPosts.filter(post => post.id === blogId);
    if(blogRequest.length === 0){
        res.send('No blog post with this id exist');
    }
    else{
        res.send(blogRequest);
    }
})

postsRouter.get('/new-blog-entry', (req, res) => {
    const body = req.body;
    const id = uuid();  //chech about the uuid...
    const newBlogPost = {...body, id};

    blogPosts.push(newBlogPost);
    res.sendStatus(200);
})

//Update
postsRouter.put('/:id', (req, res) => {
   
})

// Create a blog
postsRouter.post('/', (req, res) => {

})

//Delete
postRouter.delete('/', (req, res) => {

})

module.exports = postRouter;