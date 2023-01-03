import React, { Component } from 'react';
import ContactsForm from './ContactsForm/ContactsForm';

export class App extends Component {
  state = {
    contacts: [],
  };

  formSubmit = data => {
    console.log(data);
  };

  render() {
    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        <h1>Phonebook</h1>
        <ContactsForm onSubmit={this.formSubmit} />
        <h2>Contacts</h2>
        {/* <ContactsList /> */}
      </div>
    );
  }
}
