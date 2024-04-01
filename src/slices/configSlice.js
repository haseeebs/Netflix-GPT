import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    choosedLanguage: 'en'
}

const gptSlice = createSlice({
    name: 'config',
    initialState,
    reducers: {

        setLanguage: (state, action) => {
            state.choosedLanguage = action.payload;
        }
    }
});

export const { setLanguage } = gptSlice.actions;
export default gptSlice.reducer;