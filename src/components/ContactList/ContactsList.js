import Contact from "../ContactList/contact/Contact";
import "./contactList.css";
const ContactsList = ({ contacts, onDelete }) => {
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
