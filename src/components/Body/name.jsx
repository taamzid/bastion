import "./form.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import arrowImage from "../../assets/arrowIcon.svg";
import { useNavigate } from "react-router-dom";
import BodyBg from "./bodyBg";
import { useContext, useState } from "react";
import DataContext from "../Context/dataContext";

const Name = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const navigate = useNavigate();
  const { setSelectedName, setSelectedLastName } = useContext(DataContext);
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isBlank, setIsBlank] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const isAlpha = (str) => /^[a-zA-Z]+$/.test(str);

  const handleDropdownOptionClick = () => {
    setSelectedName(lastName);
    setSelectedLastName(firstName);
    setTimeout(() => {
      if (firstName.trim() === "" || lastName.trim() === "") {
        setIsBlank(true);
        setIsValid(false);
        return;
      }
      if (!isAlpha(firstName) || !isAlpha(lastName)) {
        setIsValid(true);
        setIsBlank(false);
      } else {
        setIsBlank(false);
        setIsValid(false);
        navigate("/email");
      }
    }, 500);
  };

  return (
    <>
      {isSmallScreen ? (
        <>
          <div className="__body">
            <BodyBg />
          </div>
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={100} />
            <div className="__almost">
              Final Step! <br />
              Who Should We Personalize This <br />
              Review For?
            </div>
            <div className="__age__input">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="__input"
              />
            </div>
            <div className="__age__input">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="__input"
              />
            </div>
            {isValid && (
              <div className="__error__message">Please input valid name.</div>
            )}
            {isBlank && (
              <div className="__error__message">Name can not be empty.</div>
            )}
            <br />
            <div className="__next" onClick={handleDropdownOptionClick}>
              Next
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={100} />
            <div className="__almost">
              Almost Done! <br /> Who Do We Address This Review To?
            </div>
            <div className="__age__input">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="__input"
              />
            </div>
            <div className="__age__input">
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="__input"
              />
            </div>
            {isValid && (
              <div className="__error__message">Please input valid name.</div>
            )}
            {isBlank && (
              <div className="__error__message">Name can not be empty.</div>
            )}
            <br />
            <br />
            <br />
            <div className="__next" onClick={handleDropdownOptionClick}>
              Next
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Name;
