import Header from "../components/Header";
import React from "react";
import { useState } from "react";

export const searchContext = React.createContext();
const Layout = ({ children }) => {
  const [searchContact, setSearchContact] = useState();

  //   const searchedWord = "ala";

  const changeHandler = (e) => {
    setSearchContact(e.target.value);
    // console.log(searchedWord);
  };
  return (
    <>
      <searchContext.Provider value={searchContact}>
        <Header changeHandler={changeHandler} searchContact={searchContact} />
        {children}
      </searchContext.Provider>
    </>
  );
};

export default Layout;
