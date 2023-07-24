import { useState } from 'react';
import PropTypes from 'prop-types';
import s from './Contacts.module.css';
import Filter from '../Filter/Filter';

function Contacts() {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);
  // state = {
  //   filter: '',
  // };

  const handleFilter = filter => {
    setFilter(filter);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const deleteContact = contactID => {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  };

  // render() {
  // filter = state;
  const title = 'sex';
  const filteredContacts = getFilteredContacts();

  return (
    <>
      <h2 className={s.title}>{title}</h2>
      <Filter filter={filter} onFilter={handleFilter} />
      <ul className={s.contactsList}>
        {filteredContacts &&
          filteredContacts.map(({ id, name, tel }) => (
            <li key={id} className={s.contact}>
              <span className={s.name}>{name}</span>
              <span className={s.phone}>{tel}</span>
              <button
                className={s.btnDeleteContact}
                type="button"
                onClick={() => deleteContact(id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
}
// }

Contacts.propTypes = {
  title: PropTypes.string,
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default Contacts;
