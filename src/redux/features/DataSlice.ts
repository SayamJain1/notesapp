import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteType } from "../../../types/noteType";


interface InitialStateType {
    data: NoteType[];
}

const initialState: InitialStateType = {
    data: [],
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<NoteType[]>) => {
            state.data = action.payload
        },
        clearDataOnLogout: (state) => {
            state.data = [];
        },
    }
})

export default dataSlice.reducer
export const { setData, clearDataOnLogout } = dataSlice.actions 