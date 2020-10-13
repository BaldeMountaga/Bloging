const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const path = require('path');
require('dotenv').config();


// Controller Imports Here
const userRouter = require('./controllers/userRouter');
const articlesRouter = require('./controllers/Articles');

app.use(express.static('build'));

app.use(bodyParser.json());
app.use(cors());
// app.use(session({ secret: 'LightBlog', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));


//connexion to the database
mongoose.connect(config.MONGODB_URI, config.MONGOOSE_OPTS)
    .then(()=>{
        console.log("Successfully connected to the Database");
    })
    .catch(res => {
        console.error("Some error occured");
        console.error(res);
    })


app.get('/', (req, res) => {
    //run the home page
    // res.sendFile(path.join(__dirname, 'component/HomePage.js'));
    res.send("Worked");
})

app.use('/api/user', userRouter);
app.use('/api/articles', articlesRouter);



// app.listen(process.env.PORT, () => {
//     console.log('App is running ');
// })

module.exports = app;
