import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteNotes, editNotes } from "../features/NotesSlice";

function OneNote({ note }) {
    // console.log(note);
    const dispatch = useDispatch();
    const [input, setInput] = useState(note.description);
    const [editable, setEditable] = useState(false);
    return (
        <div className="relative">
            <textarea className={`border-3 ${note.color} w-50 h-50 resize-none rounded shadow-xl ml-2 p-1 ${editable? 'opacity-70': 'opacity-100'}`} value={input} id={note.id}
                readOnly={!editable}
                onChange={(e) => {
                    setInput(e.target.value);
                }}
            />
            <span className="absolute bottom-1.5 w-50 ml-2 flex justify-between">
                <button className={`border-3 ${note.color} p-1 rounded w-11`}
                onClick={() => {
                    setEditable((editable) => !editable)
                    if(editable) {
                        dispatch(editNotes({id: note.id, description: input}))
                    }
                }}
                >{editable? "Save": "Edit"}</button>
                <button className={`border-3 ${note.color} p-1 rounded w-11`}
                onClick={() => {
                    dispatch(deleteNotes({id: note.id}))
                }}
                >X</button>
            </span>
        </div>
    )
}
export default OneNote;