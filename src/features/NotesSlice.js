import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

const colors = [
    "border-red-600 bg-red-400",
    "border-blue-600 bg-blue-400",
    "border-green-600 bg-green-400",
];
let colorInd = 0;
const initialState = {
    noteList: [
        {
            id: '1',
            description: 'This is first note',
            color: colors[colorInd]
        }
    ]
}
colorInd += 1;
const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNotes: (state, action) => {
            let note = {
                id: nanoid(),
                description: action.payload.description,
                color: colors[colorInd]
            }
            colorInd = (colorInd + 1) % 3;
            state.noteList.push(note);
        },
        deleteNotes: (state, action) => {
            state.noteList = state.noteList.filter((note) => note.id !== action.payload.id);
        },
        editNotes: (state, action) => {
            state.noteList = state.noteList.map((note) => {
                if (note.id === action.payload.id) {
                    note.description = action.payload.description;
                }
                return note;
            })
        }
    }
})

export const { addNotes, deleteNotes, editNotes } = noteSlice.actions;

export const noteReducer = noteSlice.reducer;