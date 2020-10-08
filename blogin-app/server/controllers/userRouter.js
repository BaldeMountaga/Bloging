const express = require ('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const { response } = require('../app');
const userRouter = express.Router();
const emptyField = require('../utils').emptyField;
const jwt = require ('jsonwebtoken');

// utils.js

/**
 * user: {
 *  firstName: jksjdf,
 *  lastName: jkasjdf,
 *  password: jksjdf,
 *
 * }
 * 
 * Python for instance is Synchronize => single thread
 * So why do we need it here?
 * 
 * We are saving to MongoDB cloud
 * We also don't know how long it'll take mongodb to save our data!!!
 * We use async so that I'll server won't be waiting for that request to complete 
 * before processing another request.
 * 
 * email = null
 * 
 * localhost:2000/api/user/signup/
 * key: Content-Type        value: Application/json
 * 
 * {
 *  "firstName": "",
 *  "lastName": "",
 *  "email": "",
 *  "password": ""
 * }
 */


const statusMessages = {
    OK_200: "OK",
    BAD_REQUEST_400: "BAD REQUEST",
    NOT_AUTHORIZED_401: "NOT AUTHORIZED",
    NOT_FOUND_404: "NOT FOUND",
    SERVER_ERROR_500: "INTERNAL SERVER ERROR",
    CREATED_201: "CREATED"
};

userRouter.post('/signup', async(request, response)=> {
    const userData = [
        request.body.firstName, 
        request.body.lastName, 
        request.body.email, 
        request.body.password
    ]

    if (!emptyField(userData)) {
        const user = new User(request.body);
        user.passwordHash = bcrypt.hashSync(request.body.password, 10);
        // bcrypt.compareSync(password, hash)

        console.log(user.passwordHash);

        try {
            await user.save();
            response.status(201).send({status: statusMessages.CREATED_201})
        } catch (error) {
            response.status(500).json({error: statusMessages.SERVER_ERROR_500})
        }

    }else {
        console.log(emptyField(userData));
        response.status(401).json({error: "All Fields are required"})
    }

})


userRouter.post('/login', async(request, response) =>{
    await User.findOne({email: request.body.email}, (error, user) =>{
        if(!user){
            response.status(401).send({email: 'No account exist with this email'});
        }
        const valid = bcrypt.compareSync(request.body.password, user.passwordHash);
        if(valid){
            
            const data = {
                email: user.email, 
                id: user.id
            }
            const token = jwt.sign(data, process.env.JWT_SECRET);

            const dataToSend ={
                token: token,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName
            }
            response.status(200).send(dataToSend);
        }
        else{
            response.status(401).send({password: 'Password mismatch'});
        }
    })
})


/**
 * Login Operation
 * 
 * {email: "No user with that email"}
 * {password: "Password mismatch"}
 * setEmailError(response.data.email)
 * setPasswordError(response.data.password)
 * 
 * await User.findOne({email: email}, (err, user)=> {
 *  Check if use is null; then return a response indicating no user exist
 *  else (if user exist) then 
 *  Validate the password using bcrypt
 *  if password matches then
 *  return 
 *   const token = jwt.sign() ===> to return a token
 * 
 * })
 * 
 * bcrypt.compareSync(realPassword, hashPassword)
 * 
 * {
 *  email: "",
 *  password: "",
 * }
 * 
 * 
 * {
 *  token: '',
 *  email: '',
 *  firstName: '',
 *  lastName: '',
 * }
 * 
 * jwt ====== JsonWebToken longstring from an actual data of any format
 * we'll be using a javascript object
 * const data = {
 *  email: email, id: user.id
 * }
 * jwt.sign(data, JWT_KEY)
 * 
 */


module.exports = userRouter;