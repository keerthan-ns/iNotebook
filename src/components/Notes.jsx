import { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";
import AddNote from "./AddNote";

export default function Notes() {
    const context = useContext(noteContext)
    const {notes, addNote} = context
    return (
        <>
            <AddNote/>
            <div className="mt-4 flex flex-col px-6">
                <h1 className="text-3xl font-bold text-blue-300 after:content-['_notes']">
                    <span className="underline underline-offset-8 decoration-7 decoration-pink-600">
                        Your
                    </span>
                </h1>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-2">
                    {
                        notes.map((note,i)=>{
                            return <NoteItem key={i} note={note}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}
