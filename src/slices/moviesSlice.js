import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    nowPlayingMovies: null
};

const moviesSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const { addNowPlayingMovies } = moviesSlice.actions;
export default moviesSlice.reducer;