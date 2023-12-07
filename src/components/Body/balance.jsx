import { useContext, useState } from "react";
import "./form.css";
import ProgressBar from "@ramonak/react-progress-bar";
import arrowImage from "../../assets/arrowIcon.svg";
import tickIcon from "../../assets/tick-circleBody.svg";
import { useNavigate } from "react-router-dom";
import BodyBg from "./bodyBg";
import DataContext from "../Context/dataContext";

const Balance = () => {
  const navigate = useNavigate();
  const { setSelectedBalance } = useContext(DataContext);
  const [selectedOption, setSelectedOption] = useState(null);
  const completed = 30;

  const handleOptionClick = (index, balance) => {
    setSelectedOption(index);
    setSelectedBalance(balance);
    setTimeout(() => {
      navigate("/age");
    }, 500);
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
        <div className="__select">Select Your Estimated Super Balance</div>
        <div className="__select__options">
          {[
            "$0 - $50,000",
            "$50,000 - $100,000",
            "$100,000 - $150,000",
            "$150,000 - $250,000",
            "$250,000 - $500,000",
            "$500,000 +",
          ].map((option, index) => (
            <div
              key={index}
              className={`__options__balance ${
                selectedOption === index ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(index, option)}
            >
              {option}
              {selectedOption === index && (
                <img src={tickIcon} alt="tickIcon" />
              )}
            </div>
          ))}
        </div>
        <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
      </div>
    </div>
  );
};

export default Balance;
