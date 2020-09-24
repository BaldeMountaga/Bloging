const express = require('express');
const app = express();
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const cors = require('cors');
const postsRouter = require('./postsRouter');
const userRouter = require('./postsRouter');



app.use(express.static('build'));
app.use(bodyParser.json());
app.use(cors());




app.use('/', (req, res, next) => {
    //run the home page
    res.send(__dirname +'component/HomePage.js');
    
    next();
})

app.use('/posts', postsRouter);
app.use('/user', userRouter);


app.listen(3000, () => {
    console.log('App is running ');
})

