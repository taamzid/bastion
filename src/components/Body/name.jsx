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
  const [lastName, setLastName] = useState();
  const [firstName, setFirstName] = useState();
  const [isBlank, setIsBlank] = useState(false);
  const isAlpha = (str) => /^[a-zA-Z]+$/.test(str);

  const handleDropdownOptionClick = () => {
    setSelectedName(lastName);
    setSelectedLastName(firstName);
    setTimeout(() => {
      if (!isAlpha(firstName) || !isAlpha(lastName)) {
        setIsBlank(true);
      } else {
        setIsBlank(false);
        navigate("/email");
      }
      console.log("isBlank:", isBlank);
    }, 500);
  };

  //   const navigate = useNavigate();
  //   const [age, setAge] = useState("");
  //   const [isUnder18, setIsUnder18] = useState(false);
  //   const [isBlank, setIsBlank] = useState(false);
  //   const [isNotNumber, setIsNotNumber] = useState(false);

  //   const handleNextClick = () => {
  //     if (age.trim() === "") {
  //       setIsBlank(true);
  //       setIsUnder18(false);
  //       setIsNotNumber(false);
  //       return;
  //     }

  //     const parsedAge = parseInt(age, 10);

  //     if (isNaN(parsedAge)) {
  //       setIsNotNumber(true);
  //       setIsBlank(false);
  //       setIsUnder18(false);
  //       return;
  //     }

  //     if (parsedAge < 18) {
  //       setIsUnder18(true);
  //       setIsNotNumber(false);
  //       setIsBlank(false);
  //     } else {
  //       setIsUnder18(false);
  //       setIsNotNumber(false);
  //       navigate("/state");
  //     }
  //   };

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
            {isBlank && (
              <div className="__error__message">Please input valid name.</div>
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
            {isBlank && (
              <div className="__error__message">Please input valid name.</div>
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
