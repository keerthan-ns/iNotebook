import { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";
import { Button, Label, TextInput, Textarea } from "flowbite-react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

export default function Notes(props) {
    let navigate = useNavigate()
    const context = useContext(noteContext)
    const {notes,getNotes,editNote} = context
    const [loadingNotes, setLoadingNotes] = useState(true)
    const fetchNotesLoading=async()=>{
        setLoadingNotes(true)
        await getNotes()
        setLoadingNotes(false)
    }
    useEffect( () => {
        if(localStorage.getItem("token"))
            fetchNotesLoading()
        else
            navigate('/login')
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const toggleBtn = useRef(null)
    const updateNote = (currentNote) =>{
        toggleBtn.current.click() 
        setNote({id: currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag: currentNote.tag})
    }
    
    const [note, setNote] = useState({id:"",etitle:"",edescription:"",etag:""})
    const handleClick=async ()=>{
        // e.preventDefault()
        await editNote(note.id,note.etitle,note.edescription,note.etag)
        toggleBtn.current.click() 
        props.showAlert("Success","Note updated")
    }

    const handleChange=(e)=>{
        setNote({
            // 3-dots means that keep the old value as is....and change or overwite
            ...note,[e.target.id]:e.target.value
        })
    }
    
    return (
        <>
            <AddNote showAlert={props.showAlert}/>
            <button ref={toggleBtn} data-modal-target="updatenote-modal" data-modal-toggle="updatenote-modal" className="hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                Toggle modal
            </button>
            <div id="updatenote-modal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className="relative w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="updatenote-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="px-6 py-6 lg:px-8">
                            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Update note</h3>
                            <form className="mt-4 flex max-w-md flex-col gap-4 ">
                                <div>
                                    <div className="mb-2 block">
                                    <Label htmlFor="etitle" value="Edit title " />
                                    </div>
                                    <TextInput id="etitle" placeholder="Update title" minLength={3} required type="text" value={note.etitle} onChange={handleChange}/>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                    <Label htmlFor="edescription" value="Edit description " />
                                    </div>
                                    <Textarea id="edescription" rows={2} placeholder="Update description" value={note.edescription} className="text-sm" minLength={6} required onChange={handleChange}/>
                                </div>
                                <div>
                                    <div className="mb-2 block">
                                    <Label htmlFor="etag" value="Edit tag" />
                                    </div>
                                    <TextInput id="etag" placeholder="Update tag" type="text" value={note.etag} onChange={handleChange}/>
                                </div>
                                <Button disabled={note.etitle.length<3 || note.edescription.length<6} type="button" className="disabled:bg-pink-300 disabled:text-black bg-pink-600" onClick={handleClick}>Update note</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div> 

            <div className="mt-4 flex flex-col px-6">
                <h1 className="text-3xl font-bold text-blue-300 after:content-['_notes']">
                    <span className="underline underline-offset-8 decoration-7 decoration-pink-600">
                        Your
                    </span>
                </h1>
                    {loadingNotes && <div className="mt-4 flex items-center justify-center"><Spinner size={"10"}/></div>}
                    {notes.length===0 && !loadingNotes &&
                        <div className="flex items-center justify-center p-4 mt-4 text-sm text-pink-600 border border-pink-400 rounded-lg bg-gray-800 " role="alert">
                            <svg className="flex-shrink-0 inline w-4 h-4 mr-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                            </svg>
                            <div>
                                <span className="font-medium">iNotebook!</span> No notes to show up yet
                            </div>
                        </div>
                    }
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
                        {
                            notes.map((note,i)=>{
                                return <NoteItem key={i} updateNote={updateNote} note={note} showAlert={props.showAlert}/>
                            })
                        }
                    </div>
            </div>
        </>
    )
}
Notes.propTypes = {
    showAlert: PropTypes.func,
}
  
