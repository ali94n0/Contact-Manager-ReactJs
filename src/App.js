import "./app.css";
import { Route, Routes } from "react-router-dom";
import AddNewContact from "./components/AddNewContact/AddNewContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import EditContact from "./components/EditContact/EditContact";
import ContactsList from "./components/ContactList/ContactsList";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/add" element={<AddNewContact />} />
        <Route path="/" element={<ContactsList />} />
      </Routes>
    </main>
  );
};

export default App;
