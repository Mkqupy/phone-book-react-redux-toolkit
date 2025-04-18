import React from 'react';
import ContactCard from './ContactCard';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../contactsSlice';

function ContactList() {
  const contacts = useSelector(state => state.contacts.contacts); // Оновіть шлях до стану
  const dispatch = useDispatch();

  const handleDelete = (phone) => {
    dispatch(deleteContact(phone));
  };

  return (
    <div>
      <h2>Список контактів</h2>
      {contacts.map((contact, index) => (
        <ContactCard key={index} contact={contact} onDelete={handleDelete} />
      ))}
    </div>
  );
}

export default ContactList;