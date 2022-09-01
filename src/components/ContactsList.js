import { BiTrash } from "react-icons/bi";
const ContactsList = ({ contacts, onDelete }) => {
  return (
    <>
      <div>contacts list</div>
      {contacts.map((c) => (
        <div key={c.id}>
          <p>{c.name}</p>
          <p>{c.email}</p>
          <button onClick={() => onDelete(c.id)}>
            <BiTrash />
          </button>
        </div>
      ))}
    </>
  );
};

export default ContactsList;
