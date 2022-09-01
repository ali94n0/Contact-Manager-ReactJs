import { useState } from "react";
import AddNewContact from "./AddNewContact";
import ContactsList from "./ContactsList";
import Header from "./Header";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  const addContacts = (formValues) => {
    setContacts([...contacts, { ...formValues, id: Date.now() }]);
    console.log(contacts);
  };

  const deleteContact = (id) => {
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };
  return (
    <div>
      <Header />
      <AddNewContact addContacts={addContacts} />
      <ContactsList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default ContactApp;
