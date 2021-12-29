import { createSlice } from '@reduxjs/toolkit';

const contactSlice = createSlice({
    name: 'contacts',
    initialState: {
        allContacts: [],

    },

    reducers: {
        addToContacts: (state, action) => {
            state.allContacts.push(action.payload)
        },
        deleteToContacts: (state, action) => {
            state.allContacts = state.allContacts.filter(contact => contact.name !== action.payload)
        }
    }
})

export const { addToContacts, deleteToContacts } = contactSlice.actions;
export default contactSlice.reducer;