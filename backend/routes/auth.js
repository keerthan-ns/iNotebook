const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')// used for validating all the field values 

// create a User using: POST "/api/auth/createuser". Login not required
router.post('/createuser',[
        body('name',"Name should contain min 3 chars").isLength({ min: 3 }),
        body('email',"Enter a valid email").isEmail(),
        body('password',"Min password length must be 6").isLength({ min: 6 })
    ],async (req,res)=>{
        // if there are errors, return errors
        const errors = validationResult(req)
        if(!errors.isEmpty())
            return res.status(400).json({errors:errors.array()})
        // check if email exists already
        try{    
            let user =await User.findOne({email: req.body.email})
            if(user)
                return res.status(400).json({error:"Account with this email already exists"})
            // create new user with await
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
            })
            // new user stored is returned back
            res.json(user)
        }catch(error){
            // other errors are handled here
            console.log(error.message)
            res.status(500).send("Some error occured")
        }

})

module.exports = router