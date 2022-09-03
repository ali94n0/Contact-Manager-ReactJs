import axios from "axios";
import { useState } from "react";
import "./addNewContact.css";

const AddNewContact = ({ setContacts }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const postContactHandler = (contact) => {
    axios
      .post("http://localhost:5001/contacts", {
        ...contact,
        id: Date.now(),
      })
      .then((response) => {
        axios
          .get("http://localhost:5001/contacts")
          .then((res) => {
            setContacts(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email)
      return alert("eall filles are mandatory!");
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
            value={contact.name}
            onChange={changeHandler}
          ></input>
        </div>
        <div className="formControl">
          <label>email</label>
          <input
            type="email"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          ></input>
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default AddNewContact;
