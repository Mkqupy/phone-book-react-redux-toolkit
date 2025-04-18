import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactsSlice';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});

export default store;