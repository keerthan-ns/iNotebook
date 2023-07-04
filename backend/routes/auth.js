const express = require('express')
const router = express.Router()
const User = require('../models/User')

// create a User using: POST "/api/auth". Auth not required
router.post('/',(req,res)=>{
    const user = User(req.body)
    user.save()
    res.json(req.body)
    
})

module.exports = router