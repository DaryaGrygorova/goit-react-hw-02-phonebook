import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Component } from 'react';

import Filter from './Filter';
import ContactForm from './ContactForm';
import Notification from './Notification';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
  };

  onChangeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Box>
        <h1>Phonebook</h1>
        <ContactForm formSubmitHandler={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {this.state.contacts.length ? (
          <>
            <Filter value={filter} onChangeFilter={this.onChangeFilter} />
            <ContactList contacts={filteredContacts} />
          </>
        ) : (
          <Notification message="There are no contacts." />
        )}
        <GlobalStyle />
      </Box>
    );
  }
}
