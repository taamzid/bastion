import "./navBar.css";
import vastionLogo from "../../assets/VASTION-PW-GREEN 1.svg";
import vastionLogoMobile from "../../assets/navNewLogo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const isSmallScreen = window.innerWidth <= 767;
  return (
    <>
      <div className="__nav-container">
        <Link to="/">
          {isSmallScreen ? (
            <img src={vastionLogoMobile} alt="vastionLogo" />
          ) : (
            <img src={vastionLogo} alt="vastionLogo" />
          )}
        </Link>
      </div>
      <div className="__line"></div>
    </>
  );
};

export default NavBar;
