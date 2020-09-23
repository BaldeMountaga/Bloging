const express = require('express');
const blogPosts = require('./db.json');   //Blog Database
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
    const id = uuid();
    const newBlogPost = {...body, id};

    blogPosts.push(newBlogPost);
    res.sendStatus(200);
})

module.exports = postRouter;



//I need to implement the post/Edit/delete/