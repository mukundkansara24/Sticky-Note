import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNotes } from "../features/NotesSlice";
function AddNotes() {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    return (
        <>
        <h1>Add Notes</h1>
        <textarea className="border-2 resize-none w-50 h-50" value={input}
        placeholder="Type your note here"
        onChange={(e) => {
            setInput(e.target.value);
        }}
        ></textarea>
        <button className="border-2 rounded p-0.5"
        onClick={() => {
            if(input === '' ) {
                return;
            }
            dispatch(addNotes({description: input}));
            setInput('');
        }}
        >Add Note</button>
        </>
    )
}

export default AddNotes;