import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import deleteContact from "../../services/deleteContactService";
import getAllContacts from "../../services/getAllContactsService";
import Contact from "../ContactList/contact/Contact";
import "./contactList.css";
import { searchContext } from "../../Layout/Layout";
import Header from "../Header";
const ContactsList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContscts, setAllContacts] = useState();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContacts();
        setContacts(data);
        setAllContacts(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getContacts();
  }, []);
  useEffect(() => {
    const saerchUpdating = () => {
      if (searched) searchedContact();
      if (searched === "") {
        setContacts(allContscts);
      }
    };
    saerchUpdating();
  }, [<Header />]);

  const searched = useContext(searchContext);
  const searchedContact = () => {
    const filteredContact = contacts.filter((c) => {
      return Object.values(c)
        .join(" ")
        .toLowerCase()
        .includes(searched.toLowerCase());
    });
    setContacts(filteredContact);
  };

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
  // if (contacts === []) {
  //   return (
  //     <div className="firstContact">
  //       <Link to={"/add"}>Add Your First Contact</Link>
  //     </div>
  //   );
  // }
  // console.log(contacts);

  return (
    <section className="contactList">
      <h3>contacts list</h3>
      <div>
        {contacts ? (
          contacts.map((contact) => {
            return (
              <Contact
                contact={contact}
                onDelete={deletedContact}
                key={contact.id}
              />
            );
          })
        ) : (
          <p>Loding...</p>
        )}
      </div>
    </section>
  );
};

export default ContactsList;
