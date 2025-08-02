import { createSlice } from '@reduxjs/toolkit'
import React, { act } from 'react'

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieNames: null,
        movieresult: null
    },
    reducers: {
        toggleGptSearchView: (state, action) => {
            state.showGptSearch = !state.showGptSearch;
        }, 
        addMovieResults: (state, action) => {
            const { movieNames, movieresult } = action.payload;
            state.movieNames = movieNames;
            state.movieresult = movieresult
        }
    }
})

export const { toggleGptSearchView, addMovieResults } = gptSlice.actions;
export default gptSlice.reducer;