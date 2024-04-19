import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
    name:'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        active: null,
        /*active: {
            id: 'QWERTY1234',
            title: '',
            body: '',
            date: 1234,
            imageUrls: [] // https://foto1.jpg, https://foto2.jpg,  https://foto3.jpg
        }*/
    },
    reducers: {
        savingNewNote: (state, action) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaving = false;
        },
        setActiveNote: (state, action) => {
            state.active = action.payload;
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
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deteleNoteById,
} = journalSlice.actions;