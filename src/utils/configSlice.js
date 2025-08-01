import { createSlice } from "@reduxjs/toolkit";
import lang from "./languageConstants";

const configSlice = createSlice({
    name: 'config',
    initialState: {
        language: "en"
    },
    reducers:{
        changeLanguage: (state, action) => {
            state.language = action.payload
        }
    }
})

export default configSlice.reducer;
export const { changeLanguage } = configSlice.actions;