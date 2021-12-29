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
    }
})

export const { addToContacts } = contactSlice.actions;
export default contactSlice.reducer;