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
        }
    }
});

export const { toggleState } = gptSlice.actions;
export default gptSlice.reducer;