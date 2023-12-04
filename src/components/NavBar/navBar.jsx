import "./navBar.css";
import logo1 from "../../assets/logo1.svg";
import logo2 from "../../assets/logo2.svg";

const NavBar = () => {
  return (
    <>
      <div className="nav-container">
        <img src={logo1} alt="" />
      </div>
      <div className="line"></div>
    </>
  );
};

export default NavBar;
