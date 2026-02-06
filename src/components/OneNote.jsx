import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useDebouncedCallback } from 'use-debounce';
import { changeColor, deleteNotes, editNotes } from "../features/NotesSlice";

function OneNote({ note }) {
    // console.log(note);
    const dispatch = useDispatch();
    const [saving, setSaving] = useState(true);
    const [input, setInput] = useState(note.description);
    const debounce = useDebouncedCallback((value) => {
        setSaving(true);
        if (value === note.description) return;
        dispatch(editNotes({ id: note.id, description: value }));
    }, 1000);



    return (
        <div className="relative">
            <textarea
                autoFocus
                className={`border-3 ${note.color} w-50 h-50 resize-none shadow-xl ml-2 p-1 ${!saving ? 'opacity-70' : 'opacity-100'}`} value={input} id={note.id}
                onChange={(e) => {
                    const value = e.target.value;
                    setSaving(false);
                    setInput(value);
                    debounce(value);
                }}
            />
            <span className="absolute bottom-1.5 w-50 ml-2 flex justify-between">
                {/* <button className={`border-3 ${note.color} p-1 rounded w-11 hover:bg-black/20 active:bg-black/30`}
                    onClick={() => {
                        setSaving((saving) => !saving)
                        if (saving) {
                            dispatch(editNotes({ id: note.id, description: input }))
                        }
                    }}
                >{saving ? "Save" : "Edit"}</button> */}
                <div className="flex gap-1 p-1.5">
                    <div className="w-5 h-5 bg-red-600 rounded border-2"
                        onClick={() => {
                            if (note.colorShort == 0) {
                                return;
                            }
                            dispatch(changeColor({ id: note.id, colors: 0 }))
                        }}
                    ></div>
                    <div className="w-5 h-5 bg-blue-600 rounded border-2"
                        onClick={() => {
                            if (note.colorShort == 1) {
                                return;
                            }
                            dispatch(changeColor({ id: note.id, colors: 1 }))
                        }}
                    ></div>
                    <div className="w-5 h-5 bg-green-600 rounded border-2"
                        onClick={() => {
                            if (note.colorShort == 2) {
                                return;
                            }
                            dispatch(changeColor({ id: note.id, colors: 2 }))
                        }}
                    ></div>
                </div>

                <button className={`border-3 ${note.color} hover:bg-black/20 active:bg-black/30 p-1 rounded w-11`}
                    onClick={() => {
                        dispatch(deleteNotes({ id: note.id }))
                    }}
                >X</button>
            </span>
        </div>
    )
}
export default OneNote;