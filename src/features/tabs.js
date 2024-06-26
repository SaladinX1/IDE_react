import { createSlice } from '@reduxjs/toolkit'
import {html, css, js} from '../assets/index'


const initialState = [
    {
        id: 1,
        lang: "html",
        imgUrl: html,
        buttonContent: "HTML",
        code: `<div>
        <h1>Éditeur de code avec React</h1>
        <p>Codez directement depuis votre navigateur.</p>
        </div>`
    },
    {
        id: 2,
        lang: "css",
        imgUrl: css,
        buttonContent: "CSS",
        code: `body {
            font-family: Roboto, sans-serif;
            padding: 25px;
            color: #111;
            background-color: #f1f1f1;
        }`
    },
    {
        id: 3,
        lang: "js",
        imgUrl: js,
        buttonContent: "JavaScript",
        code: `console.log("Hello World !")`
    },
]


export const codeUpdater = createSlice({
    name: "code-updater",
    initialState,
    reducers: {
        updateCode: (state, action) => {
            state.find(obj => obj.id === action.payload.id).code = action.payload.value
        },

    }
})

export const {updateCode} = codeUpdater.actions
export default codeUpdater.reducer