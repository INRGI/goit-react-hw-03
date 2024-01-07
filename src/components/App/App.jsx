// import ContactForm from "../ContactForm";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { ContactTitle, Container, EmptyTitle, PhoneTitle } from "./App.styled";

const contactsExample = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(window.localStorage.getItem('contacts')) ?? contactsExample;
  });

  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  const addContact = contact => {

    const isContact = contacts.some(
      ({name})=> name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isContact) {
      alert(`${contact.name} is already in contacts`)
      return;
    }

    setContacts(prevContacts => [
      ...prevContacts,
      { id: nanoid(), ...contact},
    ]);
  };

  const getVisibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filterChange = event => {
    setFilter(event.target.value.trim());
  };

  const deleteContact = contactId => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  const visibleContacts = getVisibleContacts();

  return (
      <Container>
        <PhoneTitle>Phonebook</PhoneTitle>
        <ContactForm onSubmit={addContact} />

        <ContactTitle>Contacts</ContactTitle>
        {contacts.length > 0 ? (
        <Filter value={filter} onFilterChange={filterChange}/>
        ) : (
          <EmptyTitle>Your phonebook is empty.</EmptyTitle>
        )}
        {contacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        )}
        
      </Container>
    );
};

export default App;