import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import postNewContact from "../../services/postNewContactService";
import "./addNewContact.css";

const AddNewContact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const postContactHandler = async (contact) => {
    try {
      await postNewContact({
        ...contact,
      });
      navigate("/");
    } catch (error) {
      alert("server side error");
    }
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email)
      return alert("all filles are mandatory!");
    postContactHandler(contact);
    e.target.reset();
    setContact({
      name: "",
      emai: "",
    });
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <label>name</label>
          <input
            type="text"
            name="name"
            defaultValue={contact.name}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="formControl">
          <label>email</label>
          <input
            type="email"
            name="email"
            defaultValue={contact.email}
            onChange={changeHandler}
          ></input>
        </div>
        <button type="submit">Add Contact</button>
        <Link class="backHome" to={"/"}>
          Back
        </Link>
      </form>
    </div>
  );
};

export default AddNewContact;
