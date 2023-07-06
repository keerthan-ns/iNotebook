import PropTypes from 'prop-types'
import noteContext from "../context/notes/noteContext";
import { useContext } from "react";

export default function NoteItem(props) {
    const {note,updateNote} = props;
    const context = useContext(noteContext)
    const {deleteNote} = context;
    return (
        <>
            <div className="block max-w-sm pt-6 pb-4 px-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{note.title}</h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">{note.description}</p>
                <div className='flex flex-row justify-left items-center gap-4'>
                    <i className="cursor-pointer fa-solid fa-pen text-[#45e766] text-lg" onClick={()=>{updateNote(note)}}></i>
                    <i className="cursor-pointer fa-solid fa-trash text-[#eb1010] text-lg" onClick={()=>{deleteNote(note._id)}}></i>
                </div>
            </div>
        </>
    )
}

NoteItem.propTypes = {
    children: PropTypes.node,
    note: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
    }),
    updateNote: PropTypes.func,
}
