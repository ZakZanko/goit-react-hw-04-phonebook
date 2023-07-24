import { useState } from 'react';

import Phonebook from './Phonebook/Phonebook';
import ContactForm from './ContactForm/ContactForm';
import Contacts from './Contacts/Contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  // state = {
  //   contacts: [],
  // };

  // const handleAddContact = newContact => {
  //   const contact = {
  //     id: uuidv4(),
  //     name,
  //     number,
  //   };
  
  //   setContacts(prevState => [...prevState, contact]);
  // };
  // };
  const addContactPhone = (name, number) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} уже есть в списке ваших контактов`);
      return;
    }

    const contact = {
      id: uuidv4(),
      name,
      number,
    };

    setContacts(prevState => [...prevState, contact]);
  };

  const handlerUniqName = name => {
    const { contacts } = this.state;
    const uniqName = !!contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    if (uniqName) {
      alert(`${name} is already in contacts`);
      return false;
    }
    return true;
  };
  const contact = {
    id: uuidv4(),
    name,
    number,
  };

  setContacts(prevState => [...prevState, contact]);
};

const deleteContact = contactID => {
  setContacts(contacts.filter(({ id }) => id !== contactID));
};

  const handleDeleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  // componentDidMount() {
  //   const contacts = JSON.parse(localStorage.getItem('contacts'));
  //   if (contacts) {
  //     this.setState({ contacts });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  //   }
  // }

  // render() {
  //   const { contacts } = this.state;
  return (
    <Phonebook title="Phonebook">
      <ContactForm
        onAdd={addContactPhone}
        onCheckforUniqName={handlerUniqName}
      />
      <Contacts
        title="Contacts"
        contacts={contacts}
        onDeleteContact={handleDeleteContact}
      />
    </Phonebook>
  );
}

export default App;
