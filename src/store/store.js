import { configureStore } from '@reduxjs/toolkit'
import {noteReducer} from '../features/NotesSlice'
export const store = configureStore({
    reducer: noteReducer
})