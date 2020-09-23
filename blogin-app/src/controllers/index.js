const express = require('express');
const app = express();
var morgan = require('morgan');
const bodyParser = require('body-parser');
const postsRouter = require('./postsRouter');
const userRouter = require('./postsRouter');


app.use(express.static('build'));

app.use(bodyParser());
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

app.use('/', (req, res, next) => {
    //run the home page
    res.send(__dirname +'component/HomePage.js');
    
    next();
})

app.use('/posts', postsRouter);
app.use('/user', userRouter);


app.listen(3000, () => {
    console.log('App is running at port 3000');
})

