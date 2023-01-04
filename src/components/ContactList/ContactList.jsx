import React from 'react';

const ContactList = ({ contacts, onDeliteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li key={id}>
        <p>
          {name}: {number}
        </p>
        <button onClick={() => onDeliteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default ContactList;
