import axios from "axios";
import { useState } from "react";

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
    if (!contact.name || !contact.email) return alert("enter your data!");
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
        <label>name</label>
        <input type="text" name="name" onChange={changeHandler}></input>
        <label>email</label>
        <input type="email" name="email" onChange={changeHandler}></input>
        <button>add</button>
      </form>
    </div>
  );
};

export default AddNewContact;
