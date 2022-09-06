import { Link, useLocation } from "react-router-dom";
import "./contactDetail.css";

const ContactDetail = () => {
  const { name, email } = useLocation().state.contact;

  return (
    <section className="detailsWraper">
      <div className="userDetails">
        <div className="userInfo">
          <p>user name is : {name}</p>

          <p>user email is : {email}</p>
        </div>
        <Link className="back" to={"/"} id="back">
          go to contacts list
        </Link>
      </div>
    </section>
  );
};

export default ContactDetail;
