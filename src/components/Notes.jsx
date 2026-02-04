import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import OneNote from '../components/OneNote'
import AddNotes from "./AddNotes";
function Notes() {
    const notes = useSelector((state) => {
        return state.noteList;
    })
    return (
        <>
            <AddNotes />
            <h1>Notes</h1>
            <div className="flex flex-wrap gap-1">
                {
                    notes.map((notes) => {
                        // console.log(notes);
                        return <OneNote key={notes.id} note={notes} />
                    })
                }
            </div>
        </>
    )
}
export default Notes;