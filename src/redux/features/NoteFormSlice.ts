import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    title: '',
    description: '',
    categories: 'study',
}

const NoteFormSlice = createSlice({
    name: 'NoteForm',
    initialState,
    reducers : {
        setIsLoading: (state) => {
            state.isLoading = true
        },
        removeIsLoading: (state) => {
            state.isLoading = false
        },
        setTitle : (state, action) => {
            state.title = action.payload
        },
        setDescription : (state, action) => {
            state.description = action.payload
        },
        setCategories : (state, action) => {
            state.categories = action.payload
        }
    }
})

export default NoteFormSlice.reducer
export const {setIsLoading, removeIsLoading, setTitle, setDescription,setCategories} = NoteFormSlice.actions