import { BiTrash } from "react-icons/bi";
import "./contactList.css";
import userImage from "../../assets/images/user.png";
const ContactsList = ({ contacts, onDelete }) => {
  return (
    <section className="contactList">
      <h3>contacts list</h3>
      {contacts.map((contact) => {
        const { name, email, id } = contact;
        return (
          <div key={id} className="item">
            <div className="details">
              <img src={userImage} alt="user"></img>
              <div className="info">
                <p>{name}</p>
                <p>{email}</p>
              </div>
            </div>
            <button onClick={() => onDelete(id)}>
              <BiTrash />
            </button>
          </div>
        );
      })}
    </section>
  );
};

export default ContactsList;
