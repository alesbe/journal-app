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
            state.messageSaved = '';
        },
        setNotes: (state, action) => {
            state.notes = action.payload;
        },
        setSaving: (state, action) => {
            state.isSaving = true;
            state.messageSaved = '';
        },
        updateNote: (state, action) => {
            // Este action se lanza cuando actualizamos la nota activa, de esta forma se actualiza la lista de notas de manera local con los cambios y se muestran en el sidebar
            state.isSaving = false;
            state.notes = state.notes.map( note => {
                if( note.id === action.payload.id ) {
                    return action.payload;
                }

                return note;
            } );

            state.messageSaved = `${ action.payload.title } actualizada correctamente`
        },
        deleteNoteById: (state, action) => {
            state.active = null;
            state.notes = state.notes.filter( note => note.id !== action.payload );
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [ ...state.active.imageUrls, ...action.payload ];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messageSaved = "";
            state.notes = [];
            state.active = null;
        }
    }
});

export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNoteById,
    setPhotosToActiveNote,
    clearNotesLogout
} = journalSlice.actions;