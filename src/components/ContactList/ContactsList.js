import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import deleteContact from "../../services/deleteContactService";
import getAllContacts from "../../services/getAllContactsService";
import Contact from "../ContactList/contact/Contact";
import "./contactList.css";
import { searchContext } from "../../Layout/Layout";
import Header from "../Header";
import { BiHome, BiPlusCircle } from "react-icons/bi";
const ContactsList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContscts, setAllContacts] = useState();
  const [searchContact, setSearchContact] = useState();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const { data } = await getAllContacts();
        setContacts(data);
        setAllContacts(data);
      } catch (error) {
        alert(error.message);
      }
    };
    getContacts();
  }, []);
  // useEffect(() => {
  //   const saerchUpdating = () => {
  //     if (searched) searchedContact();
  //     if (searched === "") {
  //       setContacts(allContscts);
  //     }
  //   };
  //   saerchUpdating();
  // }, [<Header />]);

  // const searched = useContext(searchContext);
  // const searchedContact = () => {
  //   const filteredContact = allContscts.filter((c) => {
  //     return Object.values(c)
  //       .join(" ")
  //       .toLowerCase()
  //       .includes(searched.toLowerCase());
  //   });
  //   setContacts(filteredContact);
  // };

  const changeHandler = (e) => {
    setSearchContact(e.target.value);
    const searched = e.target.value;
    if (searched !== "") {
      const filteredContact = allContscts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(searched.toLowerCase());
      });
      setContacts(filteredContact);
    } else {
      setContacts(allContscts);
    }
  };

  const navigate = useNavigate();

  const deletedContact = async (id) => {
    try {
      const { data } = await deleteContact(id);
      setContacts(data);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
      navigate("/");
    } catch (error) {
      alert(`${error.message}`);
    }
  };
  // if (contacts === []) {
  //   return (
  //     <div className="firstContact">
  //       <Link to={"/add"}>Add Your First Contact</Link>
  //     </div>
  //   );
  // }
  // console.log(contacts);

  return (
    <section className="listWraper">
      <div className="contactList">
        <div className="nav">
          <h3>contacts list</h3>
          <div className="search">
            <input
              type={"text"}
              placeholder={"search..."}
              onChange={changeHandler}
              defaultValue={searchContact}
            ></input>
          </div>
          <div className="icon">
            <Link to="/add">
              <BiPlusCircle />
            </Link>
            <Link to="/">
              <BiHome />
            </Link>
          </div>
        </div>
        <div>
          {contacts ? (
            contacts.map((contact) => {
              return (
                <Contact
                  contact={contact}
                  onDelete={deletedContact}
                  key={contact.id}
                />
              );
            })
          ) : (
            <p>Loding...</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactsList;
