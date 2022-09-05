import { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import getOneContact from "../../services/getOneContactService";
import putComments from "../../services/putContactService";

const EditContact = () => {
  const id = useParams().id;
  //   const { name, email } = useLocation().state.contact;
  const [updatedContact, setUpdatedContact] = useState({
    name: "",
    email: "",
  });
  const navigate = useNavigate();
  const updateContactHandler = async (updatedContact) => {
    try {
      await putComments(id, updatedContact);
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    const getContact = async () => {
      try {
        const { data } = await getOneContact(id);

        setUpdatedContact({ name: data.name, email: data.email });
      } catch (error) {
        console.log(error.message);
      }
    };
    getContact();
  }, []);

  const changeHandler = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!updatedContact.name || !updatedContact.email)
      return alert("all filles are mandatory!");
    updateContactHandler(updatedContact);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="formControl">
          <lable>name</lable>
          <input
            type="text"
            defaultValue={updatedContact.name}
            name="name"
            onChange={changeHandler}
          ></input>
        </div>
        <div className="formControl">
          <lable>email</lable>
          <input
            type="email"
            defaultValue={updatedContact.email}
            name="email"
            onChange={changeHandler}
          ></input>
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditContact;
