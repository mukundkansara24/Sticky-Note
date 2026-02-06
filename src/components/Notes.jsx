import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import OneNote from '../components/OneNote'
import AddNotes from "./AddNotes";
import { addNotes } from "../features/NotesSlice";
function Notes() {
    const notes = useSelector((state) => {
        return state.noteList;
    })

    const dispatch = useDispatch();
    return (
        <div className="relative h-screen w-full">
            <div
            
            >Notes</div>
            <div className="flex flex-wrap gap-1">
                {
                    notes.map((notes) => {
                        // console.log(notes);
                        return <OneNote key={notes.id} note={notes} />
                    })
                }
            </div>
            <button className="fixed bottom-3 left-1/2 z-10 border-2 rounded p-0.5 "
                onClick={() => {
                    dispatch(addNotes());
                    setInput('');
                }}
            >Add Note</button>
        </div>
    )
}
export default Notes;