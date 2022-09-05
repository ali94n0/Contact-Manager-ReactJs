import { Link } from "react-router-dom";
import { BiPlusCircle, BiHome } from "react-icons/bi";

const Header = () => {
  return (
    <header>
      <h1>contact manager</h1>
      <div>
        <Link to="/add">
          {/* <button> */}
          <BiPlusCircle />

          {/* </button> */}
        </Link>
        <Link to="/">
          <BiHome />
        </Link>
      </div>
    </header>
  );
};

export default Header;
