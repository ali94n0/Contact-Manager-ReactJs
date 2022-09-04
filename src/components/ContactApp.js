import axios from "axios";
import { useEffect, useState } from "react";
import AddNewContact from "./AddNewContact/AddNewContact";
import ContactsList from "./ContactList/ContactsList";
import Header from "./Header";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5001/contacts")
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    const savedContacts = JSON.parse(localStorage.getItem("contacts"));
    if (savedContacts) {
      setContacts(savedContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);
  //   const addContacts = (formValues) => {
  //     setContacts([...contacts, { ...formValues, id: Date.now() }]);
  //     console.log(contacts);
  //   };

  const deleteContact = (id) => {
    axios
      .delete(`http://localhost:5001/contacts/${id}`)
      .then((res) => {
        axios
          .get("http://localhost:5001/contacts")
          .then((response) => {
            setContacts(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    const filteredContacts = contacts.filter((c) => c.id !== id);
    setContacts(filteredContacts);
  };
  return (
    <div>
      <Header />
      <AddNewContact setContacts={setContacts} />
      <ContactsList contacts={contacts} onDelete={deleteContact} />
    </div>
  );
};

export default ContactApp;
