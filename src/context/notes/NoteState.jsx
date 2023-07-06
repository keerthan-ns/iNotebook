import { useState } from "react";
import NoteContext from "./noteContext";
import PropTypes from 'prop-types'

const NoteState = (props) =>{
    const notesInitial = [
        {
          "_id": "64a51983f39b99de16326bd7",
          "user": "64a50892090f71075a96c6e5",
          "title": "First note",
          "description": "Still work not done",
          "tag": "Personal",
          "date": "2023-07-05T07:19:31.758Z",
          "__v": 0
        },
        {
          "_id": "64a519dbf39b99de16326bda",
          "user": "64a50892090f71075a96c6e5",
          "title": "Second note",
          "description": "Still work not done",
          "tag": "Personal",
          "date": "2023-07-05T07:20:59.127Z",
          "__v": 0
        },
        {
          "_id": "64a55844b4d80e7f7c80f19f",
          "user": "64a50892090f71075a96c6e5",
          "title": "Third note updated",
          "description": "Still work not done updated",
          "tag": "Personal",
          "date": "2023-07-05T11:47:16.010Z",
          "__v": 0
        },
        {
          "_id": "64a519dbf39b99de16326bda",
          "user": "64a50892090f71075a96c6e5",
          "title": "Second note",
          "description": "Still work not done",
          "tag": "Personal",
          "date": "2023-07-05T07:20:59.127Z",
          "__v": 0
        },
        {
          "_id": "64a55844b4d80e7f7c80f19f",
          "user": "64a50892090f71075a96c6e5",
          "title": "Third note updated",
          "description": "Still work not done updated",
          "tag": "Personal",
          "date": "2023-07-05T11:47:16.010Z",
          "__v": 0
        },
        {
          "_id": "64a519dbf39b99de16326bda",
          "user": "64a50892090f71075a96c6e5",
          "title": "Second note",
          "description": "Still work not done",
          "tag": "Personal",
          "date": "2023-07-05T07:20:59.127Z",
          "__v": 0
        },
        {
          "_id": "64a55844b4d80e7f7c80f19f",
          "user": "64a50892090f71075a96c6e5",
          "title": "Third note updated",
          "description": "Still work not done updated",
          "tag": "Personal",
          "date": "2023-07-05T11:47:16.010Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)
    return(
        <NoteContext.Provider value={{notes,setNotes}}>
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