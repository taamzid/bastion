import { useState } from "react";
import "./form.css";
import ProgressBar from "@ramonak/react-progress-bar";
import arrowImage from "../../assets/arrowIcon.svg";
import tickIcon from "../../assets/tick-circleBody.svg";

const Form = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const completed = 20;

  const handleOptionClick = (index) => {
    setSelectedOption(index);
  };
  return (
    <div className="__form__body">
      <ProgressBar
        completed={completed}
        isLabelVisible={false}
        bgColor="#507B1C"
        baseBgColor="rgba(56, 85, 60, 0.20)"
        height="24px"
      />
      <div className="__select">Select Your Super Fund To Begin</div>
      <div className="__select__options">
        {[
          "Australian Super",
          "HOSTPLUS",
          "CBUS",
          "Australian Retirement Trust",
          "REST",
          "HESTA",
          "AMP",
          "Aware Super",
          "MLC",
          "QSuper",
        ].map((option, index) => (
          <div
            key={index}
            className={`__options ${
              selectedOption === index ? "selected" : ""
            }`}
            onClick={() => handleOptionClick(index)}
          >
            {option}
            {selectedOption === index && <img src={tickIcon} alt="tickIcon" />}
          </div>
        ))}
      </div>
      <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
    </div>
  );
};

export default Form;
