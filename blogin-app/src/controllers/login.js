const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require ('express').Router();
// const user = require('../models/users');
const users = require('./users.json')

//login
loginRouter.post('/', async (req, res) =>{
    const body = req.body;

    const user = users.find(user => user.email === body.email);
    if(user){
        const passwordCorrect = bcrypt.compare(body.password, user.password);
        
        if(!(user && passwordCorrect)){
            return res.status(401).json({
                error: 'invalid username or password'
            })
        }

       res.status(200).send({email: user.email});
    }
});

module.exports = loginRouter;

//install json web token