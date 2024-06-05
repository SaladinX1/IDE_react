import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    preview: true,
}

export const preview = createSlice({
    name:"preview",
    initialState,
    reducers: {
        togglePreview: (state, action) => {
            state.preview = !state.preview
        },
        hidePreview: (state, action) => {
            state.preview = false
        }
    }

})
export const {hidePreview, togglePreview} = preview.actions
export default preview.reducer