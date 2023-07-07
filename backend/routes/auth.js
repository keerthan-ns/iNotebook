const express = require('express')
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator')// used for validating all the field values 
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../env')
const fetchUser = require('../middleware/fetchUser')

const JWT_SECRET = keys[2]

// ROUTE 1: create a User using: POST "/api/auth/createuser". Login not required
router.post('/createuser',[
        body('name',"Name should contain min 3 chars").isLength({ min: 3 }),
        body('email',"Enter a valid email").isEmail(),
        body('password',"Min password length must be 6").isLength({ min: 6 })
    ],async (req,res)=>{
        let success = false
        // if there are errors, return errors
        const errors = validationResult(req)
        if(!errors.isEmpty())
            return res.status(400).json({errors:errors.array()})
        // check if email exists already
        try{    
            let user =await User.findOne({email: req.body.email})
            if(user)
                return res.status(400).json({success,error:"Account with this email already exists"})
            const salt = await bcrypt.genSalt(10);
            const secPass = await bcrypt.hash(req.body.password, salt)
            // create new user with await
            user = await User.create({
                name: req.body.name,
                email: req.body.email,
                password: secPass,
            })
            const data = {
                user:{
                    id: user.id
                }
            }
            // jsonwebtoken
            const authtoken = jwt.sign(data,JWT_SECRET)
            success = true
            // new user stored is returned back
            res.json({success,authtoken: authtoken})
            // res.json(user)
        }catch(error){
            // other errors are handled here
            console.log(error.message)
            res.status(500).send("Internal server error occured")
        }

})

// ROUTE 2: authentication a user using "/api/auth/login"
router.post('/login',[
    body('email',"Enter a valid email").isEmail(),
    body('password',"Password cannot be blank").exists()
],async (req,res)=>{
    let success = false
    // if there are errors, return errors
    const errors = validationResult(req)
    if(!errors.isEmpty())
        return res.status(400).json({errors:errors.array()})

    const {email,password} = req.body
    try{
        let user = await User.findOne({email})
        if(!user)
            return res.status(400).json({error:"Please login through current credentials"})
        const passwordCompare = await bcrypt.compare(password,user.password)
        if(!passwordCompare)
            return res.status(400).json({error:"Please login through current credentials"})
        
            const data = {
                user:{
                    id: user.id
                }
            }
            // jsonwebtoken
            const authtoken = jwt.sign(data,JWT_SECRET)
            success = true
            // new user stored is returned back
            res.json({success,authtoken: authtoken})
    }catch(error){
        // other errors are handled here
        console.log(error.message)
        res.status(500).send("Internal server error occured")
    }
})

// ROUTE 3: get loggedin user details POST :"/api/auth/getuser" : login required
router.post('/getuser',fetchUser,async (req,res)=>{

    try{
        // obtained from fetchUSer function
        const userId = req.user.id
        const user = await User.findById(userId).select("-password")
        res.send(user)
    }catch(error){
        // other errors are handled here
        console.log(error.message)
        res.status(500).send("Internal server error occured")
    }
})

module.exports = router