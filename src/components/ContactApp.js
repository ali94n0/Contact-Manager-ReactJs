import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteContact from "../services/deleteContactService";
import getAllContacts from "../services/getAllContactsService";

import ContactsList from "./ContactList/ContactsList";

const ContactApp = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContacts();
        setContacts(data);
      } catch (error) {
        console.log(error);
      }
    };
    getContacts();
  }, []);
  const navigate = useNavigate();
  const deletedContact = async (id) => {
    try {
      const { data } = await deleteContact(id);
      setContacts(data);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
      navigate("/");
    } catch (error) {
      alert(`${error.message}`);
    }
  };
  return (
    <>
      <ContactsList contacts={contacts} onDelete={deletedContact} />
    </>
  );
};

export default ContactApp;
