import { Button, Label, TextInput, Textarea } from "flowbite-react"
import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddNote() {
  const context = useContext(noteContext)
  const {addNote} = context
  const [note, setNote] = useState({title:"",description:"",tag:""})

  const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
    setNote({title:"",description:"",tag:""})
  }

  const handleChange=(e)=>{
    setNote({
      // 3-dots means that keep the old value as is....and change or overwite
      ...note,[e.target.id]:e.target.value
    })
  }
  return (
    <div className="flex flex-col px-6">
        <h1 className="text-3xl font-bold text-blue-300 after:content-['_a_note']">
          <span className="underline underline-offset-8 decoration-7 decoration-pink-600">
            Add
          </span>
        </h1>
        <form className="mt-4 flex max-w-md flex-col gap-4 ">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title : " />
            </div>
            <TextInput id="title" placeholder="Enter the notes title" minLength={3} value={note.title} required type="text" onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description : " />
            </div>
            <Textarea id="description" rows={2} placeholder="Enter the notes description" className="text-sm" value={note.description} minLength={6} required onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="tag" value="Tag : " />
            </div>
            <TextInput id="tag" placeholder="Enter the notes tag" type="text" value={note.tag} onChange={handleChange}/>
          </div>
          <Button disabled={note.title.length<3 || note.description.length<6} type="submit" className="disabled:bg-pink-300 disabled:text-black bg-pink-600" onClick={handleClick}>Add note</Button>
        </form>
      </div>
  )
}
