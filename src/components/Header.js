import { Link } from "react-router-dom";
import { BiPlusCircle, BiHome } from "react-icons/bi";
import { useState } from "react";
import getAllContacts from "../services/getAllContactsService";
import { useEffect } from "react";

const Header = () => {
  const [searchContact, setSearchContact] = useState();
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContacts();
        setContacts(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getContacts();
  }, []);

  const changeHandler = (e) => {
    setSearchContact(e.target.value);
    const searchItem = e.target.value;
    const filteredContact = contacts.filter((c) => {
      return Object.values(c)
        .join(" ")
        .toLowerCase()
        .includes(searchItem.toLowerCase());
    });
    setContacts(filteredContact);
    console.log(contacts);
  };

  return (
    <header>
      <h1>contact manager</h1>
      <div>
        <input
          type={"text"}
          placeholder={"search..."}
          onChange={changeHandler}
          defaultValue={searchContact}
        ></input>
      </div>
      <div>
        <Link to="/add">
          <BiPlusCircle />
        </Link>
        <Link to="/">
          <BiHome />
        </Link>
      </div>
    </header>
  );
};

export default Header;
