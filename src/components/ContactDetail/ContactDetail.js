import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
  const { name, email } = useLocation().state.contact;

  return (
    <div>
      <p>user name is : {name}</p>
      <p>user email is : {email}</p>
      <Link to={"/"}>go to contacts list</Link>
    </div>
  );
};

export default ContactDetail;
