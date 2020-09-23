const express = require('express');
const bcrypt = require('bcrypt');
const userRouter = express.Router();

//Registration
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
});

module.exports = userRouter;
//install bcrypt     npm install bcrypt ask where to install the bcrypt the backend folder in the template
//  folder that will let it accessible to all of them ?