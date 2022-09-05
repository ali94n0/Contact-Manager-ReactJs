import { Link } from "react-router-dom";
import Contact from "../ContactList/contact/Contact";
import "./contactList.css";
const ContactsList = ({ contacts, onDelete }) => {
  if (contacts.length === 0) {
    return (
      <div className="firstContact">
        <Link to={"/add"}>Add Your First Contact</Link>
      </div>
    );
  }

  return (
    <section className="contactList">
      <h3>contacts list</h3>
      {contacts.map((contact) => {
        return (
          <Contact contact={contact} onDelete={onDelete} key={contact.id} />
        );
      })}
    </section>
  );
};

export default ContactsList;
