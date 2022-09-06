import { Link } from "react-router-dom";
import { BiPlusCircle, BiHome } from "react-icons/bi";

import React from "react";

const Header = ({ changeHandler, searchContact }) => {
  return (
    <header>
      <h1>Contacts</h1>
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
