import "./form.css";
import ProgressBar from "@ramonak/react-progress-bar";
import arrowImage from "../../assets/arrowIcon.svg";
import infoCircleIcon from "../../assets/infoCircleIcon.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BodyBg from "./bodyBg";

const Age = () => {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [isUnder18, setIsUnder18] = useState(false);
  const [isBlank, setIsBlank] = useState(false);
  const [isNotNumber, setIsNotNumber] = useState(false);
  const completed = 45;

  const handleNextClick = () => {
    if (age.trim() === "") {
      setIsBlank(true);
      setIsUnder18(false);
      setIsNotNumber(false);
      return;
    }

    const parsedAge = parseInt(age, 10);

    if (isNaN(parsedAge)) {
      setIsNotNumber(true);
      setIsBlank(false);
      setIsUnder18(false);
      return;
    }

    if (parsedAge < 18) {
      setIsUnder18(true);
      setIsNotNumber(false);
      setIsBlank(false);
    } else {
      setIsUnder18(false);
      setIsNotNumber(false);
      navigate("/state");
    }
  };

  return (
    <div className="__body">
      <BodyBg />
      <div className="__form__body">
        <div style={{ marginTop: "20px" }}></div>
        <ProgressBar
          completed={completed}
          isLabelVisible={false}
          bgColor="#507B1C"
          baseBgColor="rgba(56, 85, 60, 0.20)"
          height="24px"
        />
        <div className="__select">Select Enter Your Age</div>
        <div className="__why">
          <div className="__why__we">
            <div>Why we need your age?</div>
            <img src={infoCircleIcon} alt="infoCircleIcon" />
          </div>
        </div>
        <div className="__age__input">
          <span className="__your">Your Age</span>
          <input
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Please enter your age"
            className="__input"
          />
        </div>
        {isUnder18 && (
          <div className="__error__message">
            You must be 18 or older to proceed.
          </div>
        )}
        {isNotNumber && (
          <div className="__error__message">Please enter a valid number.</div>
        )}
        {isBlank && (
          <div className="__error__message">Age can not be empty.</div>
        )}
        <br />
        <br />
        <br />
        <div className="__next" onClick={handleNextClick}>
          Next
        </div>
        <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
      </div>
    </div>
  );
};

export default Age;
