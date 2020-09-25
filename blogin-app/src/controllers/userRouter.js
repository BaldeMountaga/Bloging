const express = require ('express');
const users = require('./user');
const bcrypt = require('bcrypt');
const userRouter = express.Router();

//Registration user
userRouter.post('/', async(req, res, next) =>{
    try{
        const body = req.body;

        const saltRounds = 10; //this is just to specify the number request we can put at any number
        const passwordHash = await bcrypt.hash(body.password, saltRounds);
            
        const user = new User({
            username: body.email,
            email: body.email,
            passwordHash
        });
        
        const savedUser = await user.save();
        res.json(savedUser.toJSON())
   
    }catch(exception){
        next(exception);
    }

    next();
});

//Loging user
userRouter.post('/', async (req, res) =>{
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


module.exports = userRouter;