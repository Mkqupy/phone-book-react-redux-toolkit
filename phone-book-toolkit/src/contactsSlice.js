import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: [
    { name: 'Ванесса', phone: '0671234567', email: 'ness@gmail.com' },
    { name: 'Женя', phone: '0509876543', email: 'evgen@gmail.com' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action) => {
      state.contacts = state.contacts.filter(contact => contact.phone !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;