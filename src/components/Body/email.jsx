import "./form.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import arrowImage from "../../assets/arrowIcon.svg";
import infoCircleIcon from "../../assets/infoCircleIcon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BodyBg from "./bodyBg";

const Email = () => {
  const isSmallScreen = window.innerWidth <= 767;
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

  //   const handleKeyPress = (e) => {
  //     if (e.key === "Enter") {
  //       handleNextClick();
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
            <ProgressBar animated now={45} />
            <div className="__select">
              Almost done! <br /> Who do we address this review to
            </div>

            <div className="__age__input">
              <input
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your email"
                className="__input"
                // onKeyPress={handleKeyPress}
              />
            </div>
            <div className="__age__input">
              <input
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                placeholder="Contact number"
                className="__input"
                // onKeyPress={handleKeyPress}
              />
            </div>
            {/* {isUnder18 && (
              <div className="__error__message">
                You must be 18 or older to proceed.
              </div>
            )}
            {isNotNumber && (
              <div className="__error__message">
                Please enter a valid number.
              </div>
            )}
            {isBlank && (
              <div className="__error__message">Age can not be empty.</div>
            )} */}
            <br />
            <div className="__next">Next</div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </>
      ) : (
        <div className="__body">
          <BodyBg />
          <div className="__form__body">
            <div style={{ marginTop: "20px" }}></div>
            <ProgressBar animated now={45} />
            <div className="__select">
              Almost done! <br />
              Who do we address this review to{" "}
            </div>

            <div className="__age__input">
              <input
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                placeholder="Enter your email"
                className="__input"
                // onKeyPress={handleKeyPress}
              />
            </div>
            <div className="__age__input">
              <input
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                placeholder="Contact number"
                className="__input"
                // onKeyPress={handleKeyPress}
              />
            </div>
            {/* {isUnder18 && (
              <div className="__error__message">
                You must be 18 or older to proceed.
              </div> 
            )}     
                Please enter a valid number.
              </div>
            )}
            {isBlank && (
              <div className="__error__message">Age can not be empty.</div>
            )} */}
            <br />
            <br />
            <br />
            <div className="__next">Next</div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Email;
