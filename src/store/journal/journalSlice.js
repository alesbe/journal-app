import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name:'journal',
    initialState: {
        isSaving: true,
        messageSaved: '',
        notes: [],
        //active: null,
        /*active: {
            id: 'QWERTY1234',
            title: '',
            body: '',
            date: 1234,
            imageUrls: [] // https://foto1.jpg, https://foto2.jpg,  https://foto3.jpg
        }*/
    },
    reducers: {
        addNewEmptyNote: (state, action) => {

        },
        setActiveNote: (state, action) => {

        },
        setNotes: (state, action) => {

        },
        setSaving: (state, action) => {

        },
        updateNote: (state, action) => {

        },
        deteleNoteById: (state, action) => {

        },
    }
});

export const {
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deteleNoteById,
} = journalSlice.actions;