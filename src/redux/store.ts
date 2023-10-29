import { configureStore } from "@reduxjs/toolkit";
import authReducer from './features/AuthSlice'
import noteFormReducer from './features/NoteFormSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        noteForm: noteFormReducer,
    }
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch