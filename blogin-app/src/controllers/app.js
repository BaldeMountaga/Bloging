const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./postsRouter');
require('dotenv').config();
const articlesRouter = require('./Articles')

app.use(express.static('build'));

app.use(bodyParser.json());
app.use(cors());
app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


const MongoConfig = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

//connexion to the database
mongoose.connect(process.env.MongoDB_URI, MongoConfig)
    .then(res => {
        console.log("Successfully connected to the Database");
    })
    .catch(res => {
        console.error("Some error occured");
    })


app.use('/', (req, res, next) => {
    //run the home page
    res.send(__dirname +'component/HomePage.js');
    next();
})


app.use('/user', userRouter);
app.use('/api/article', articlesRouter);



app.listen(process.env.PORT, () => {
    console.log('App is running ');
})

module.exports = app;
