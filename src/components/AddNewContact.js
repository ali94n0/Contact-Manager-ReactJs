import { useState } from "react";

const AddNewContact = ({ addContacts }) => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(contact);
    addContacts(contact);
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
