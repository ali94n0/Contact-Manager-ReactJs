import { Link } from "react-router-dom";
import { BiPlusCircle } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <h1>contact manager</h1>
      <Link to="/add">
        {/* <button> */}
        <BiPlusCircle />
        {/* </button> */}
      </Link>
    </header>
  );
};

export default Header;
