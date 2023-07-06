import { useState } from "react";
import NoteContext from "./noteContext";
import PropTypes from 'prop-types'

const NoteState = (props) =>{
    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial)

    // get all notes
    const getNotes = async () =>{     
        const response = await fetch(`${host}/api/notes/fetchallnotes`,{
            method:'GET',
            headers:{
                'Content-type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTA4OTIwOTBmNzEwNzVhOTZjNmU1In0sImlhdCI6MTY4ODU1NTcwMn0.IWY9BCy1p4tPXQJ03s_G55vrqmZpkepVMSEEyHMEqZM'
            }
        })
        const json = await response.json();
        // console.log(json)
        setNotes(json)
    }

    // add new note
    const addNote = async (title,description,tag) =>{
        // console.log("adding new note")
        const response = await fetch(`${host}/api/notes/addnote`,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTA4OTIwOTBmNzEwNzVhOTZjNmU1In0sImlhdCI6MTY4ODU1NTcwMn0.IWY9BCy1p4tPXQJ03s_G55vrqmZpkepVMSEEyHMEqZM'
            },
            body: JSON.stringify({title,description,tag})
        })
        const note = await response.json();
        setNotes(notes.concat(note))
    }
    // delete note
    const deleteNote = async (id) =>{
        // console.log("deleting "+id)
        const response = await fetch(`${host}/api/notes/deletenote/${id}`,{
            method:'DELETE',
            headers:{
                'Content-type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTA4OTIwOTBmNzEwNzVhOTZjNmU1In0sImlhdCI6MTY4ODU1NTcwMn0.IWY9BCy1p4tPXQJ03s_G55vrqmZpkepVMSEEyHMEqZM'
            }
        })
        const json = await response.json();
        const newNotes = notes.filter((note)=>{return note._id!=id})
        setNotes(newNotes)
    }
    // edit note
    const editNote = async (id, title, description, tag) =>{
        const response = await fetch(`${host}/api/notes/updatenote/${id}`,{
            method:'PUT',
            headers:{
                'Content-type':'application/json',
                'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRhNTA4OTIwOTBmNzEwNzVhOTZjNmU1In0sImlhdCI6MTY4ODU1NTcwMn0.IWY9BCy1p4tPXQJ03s_G55vrqmZpkepVMSEEyHMEqZM'
            },
            body: JSON.stringify({title,description,tag})
        })
        const json = await response.json();
        // 
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < newNotes.length; index++) {
            const element = newNotes[index];
            if(element._id === id){
                newNotes[index].title = title
                newNotes[index].description = description
                newNotes[index].tag = tag
                break
            }
        }
        setNotes(newNotes)
    }
    return(
        <NoteContext.Provider value={{notes,addNote,deleteNote,editNote,getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

// extra required
NoteState.propTypes = {
    children: PropTypes.node.isRequired,
    note: PropTypes.shape({
        title: PropTypes.string.isRequired
    })
}

export default NoteState