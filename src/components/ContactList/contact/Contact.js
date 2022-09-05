import userImage from "../../../assets/images/user.png";
import { BiTrash, BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;
  return (
    <div key={id} className="item">
      <Link to={`user/${id}`} state={{ contact }}>
        <div className="details">
          <img src={userImage} alt="user"></img>
          <div className="info">
            <p>{name}</p>
            <p>{email}</p>
          </div>
        </div>
      </Link>
      <div>
        <Link className="edit" to={`edit/${id}`}>
          <BiEdit />
        </Link>
        <button onClick={() => onDelete(id)}>
          <BiTrash />
        </button>
      </div>
    </div>
  );
};

export default Contact;
