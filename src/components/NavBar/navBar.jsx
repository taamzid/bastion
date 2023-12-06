import "./navBar.css";
import logo1 from "../../assets/logo1.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <Link to="/">
          <img src={logo1} alt="logo1" />
        </Link>
      </div>
      <div className="line"></div>
    </>
  );
};

export default NavBar;
