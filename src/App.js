import ContactApp from "./components/ContactApp";
import "./app.css";
import { Route, Routes } from "react-router-dom";
import AddNewContact from "./components/AddNewContact/AddNewContact";
import ContactDetail from "./components/ContactDetail/ContactDetail";
import EditContact from "./components/EditContact/EditContact";

const App = () => {
  return (
    <main className="App">
      <Routes>
        <Route path="/edit/:id" element={<EditContact />} />
        <Route path="/user/:id" element={<ContactDetail />} />
        <Route path="/add" element={<AddNewContact />} />
        <Route path="/" element={<ContactApp />} />
      </Routes>
    </main>
  );
};

export default App;
