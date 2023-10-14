import { createSlice } from "@reduxjs/toolkit";

type AuthType = {
    isAuth: boolean,
    logEmail: string,
    logPassword: string,
    logIsLoading: boolean,

    signName: string,
    signEmail: string,
    signPassword: string,
    signIsLoading: boolean,
}
const initialState: AuthType = {
    isAuth: false,
    logEmail: '',
    logPassword: '',
    logIsLoading: false,

    signName: '',
    signEmail: '',
    signPassword: '',
    signIsLoading: false,
}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth: (state) => {
            state.isAuth = true
        },
        removeAuth: (state) => {
            state.isAuth = false
        },
        setLogEmail: (state, action) => {
            state.logEmail = action.payload
        },
        setLogPassword: (state, action) => {
            state.logPassword = action.payload
        },
        setLogIsLoading: (state) => {
            state.logIsLoading = true
        },
        removeLogIsLoading: (state) => {
            state.logIsLoading = false
        },

        setSignName: (state, action) => {
            state.signName = action.payload
        },
        setSignEmail: (state, action) => {
            state.signEmail = action.payload
        },
        setSignPassword: (state, action) => {
            state.signPassword = action.payload
        },
        setSignIsLoading: (state) => {
            state.signIsLoading = true
        },
        removeSignIsLoading: (state) => {
            state.signIsLoading = false
        },

    }
})

export default authSlice.reducer
export const { setAuth, removeAuth, setLogEmail, setLogPassword, setLogIsLoading, removeLogIsLoading, setSignEmail, setSignIsLoading, removeSignIsLoading, setSignName, setSignPassword } = authSlice.actions