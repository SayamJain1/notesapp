// import { configureStore } from "@reduxjs/toolkit";
// import authReducer from './features/AuthSlice'
// import noteFormReducer from './features/NoteFormSlice'
// import dataReducer from './features/DataSlice'

// const store = configureStore({
//     reducer: {
//         auth: authReducer,
//         noteForm: noteFormReducer,
//         data: dataReducer,
//     }
// })

// export default store

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch


import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import authReducer from './features/AuthSlice';
import noteFormReducer from './features/NoteFormSlice';
import dataReducer from './features/DataSlice';

const reducers = combineReducers({
    auth: authReducer,
    noteForm: noteFormReducer,
    data: dataReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
