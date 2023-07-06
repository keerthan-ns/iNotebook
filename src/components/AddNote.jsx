import { Button, Label, TextInput, Textarea } from "flowbite-react"
import { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

export default function AddNote() {
  const context = useContext(noteContext)
  const {addNote} = context
  const [note, setNote] = useState({title:"",decription:"",tag:""})

  const handleClick=(e)=>{
    e.preventDefault()
    addNote(note.title,note.description,note.tag)
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
            <TextInput id="title" placeholder="Enter the notes title" required type="text" onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="description" value="Description : " />
            </div>
            <Textarea id="description" rows={2} placeholder="Enter the notes description" required onChange={handleChange}/>
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="tag" value="Tag : " />
            </div>
            <TextInput id="tag" placeholder="Enter the notes tag" type="text" onChange={handleChange}/>
          </div>
          {/* <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div> */}
          <Button type="submit" className="bg-pink-600" onClick={handleClick}>Submit</Button>
        </form>
      </div>
  )
}
