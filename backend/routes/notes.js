const express = require('express')
const router = express.Router()
const Notes = require('../models/Notes')
const fetchUser = require('../middleware/fetchUser')
const { body, validationResult } = require('express-validator')// used for validating all the field values 

// ROUTE 1: get all posts GET :"/api/notes/fetchallnotes" : login required
router.get('/fetchallnotes',fetchUser,async (req,res)=>{
    try {
        const notes = await Notes.find({user:req.user.id})
        res.json(notes)
    } catch (error) {
        // other errors are handled here
        res.status(500).send("Internal server error occured")
    }
})

// ROUTE 2: add new post POST :"/api/notes/addnote" : login required
router.post('/addnote',fetchUser,[
        body('title',"Title should contain min 3 chars").isLength({ min: 3 }),
        body('description',"Min description length must be 6").isLength({ min: 6 })
    ],async (req,res)=>{
        try {
            // if there are errors, return errors
            const errors = validationResult(req)
            if(!errors.isEmpty())
                return res.status(400).json({errors:errors.array()})
            
            const {title,description,tag} = req.body
            const note = new Notes({
                title,description,tag,user:req.user.id
            })
            const savedNote = await note.save()
            res.json(savedNote)
        } catch (error) {
            // other errors are handled here
            res.status(500).send("Internal server error occured")
        }
})

// ROUTE 3: update an existing notes PUT :"/api/notes/updatenote/:id" : login required
router.put('/updatenote/:id', fetchUser, async (req, res) => {
    try {
        const {title, description, tag} = req.body;
        // Create a newNote object
        const newNote  = {};
        if(title){newNote.title = title}
        if(description){newNote.description = description}
        if(tag){newNote.tag = tag}

        // Find the note to be updated and update it
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}

        if(note.user.toString() !== req.user.id){
            return res.status(401).send("Not Allowed");
        }

        note = await Notes.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
        res.json({note});
    }catch (error) {
            // other errors are handled here
            res.status(500).send("Internal server error occured")
        }
})

// ROUTE 4: delete an existing notes DELETE :"/api/notes/deletenote/:id" : login required
router.delete('/deletenote/:id', fetchUser, async (req, res) => {
    try {
        // Find the note to be deleted and delete
        let note = await Notes.findById(req.params.id);
        if(!note){return res.status(404).send("Not Found")}

        // delete 
        if(note.user.toString() !== req.user.id)
            return res.status(401).send("Not Allowed")

        note = await Notes.findByIdAndDelete(req.params.id)
        res.json({"Success":"Note deleted successfully",note:note})
    }catch (error) {
        // other errors are handled here
        res.status(500).send("Internal server error occured")
    }
})

module.exports = router