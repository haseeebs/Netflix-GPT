import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    showGptSuggestionComponent: false
}

const gptSlice = createSlice({
    name: 'gpt',
    initialState,
    reducers: {
        toggleState: (state, action) => {
            state.showGptSuggestionComponent = !state.showGptSuggestionComponent
        },
        setSearchedMovies: (state, action) => {
            state.searchedMovies = action.payload;
        }
    }
});

export const { toggleState, setSearchedMovies } = gptSlice.actions;
export default gptSlice.reducer;