import { useEffect, useRef, useState } from "react";
import "./form.css";
import ProgressBar from "@ramonak/react-progress-bar";
import arrowImage from "../../assets/arrowIcon.svg";
import tickIcon from "../../assets/tick-circleBody.svg";
import dropDown from "../../assets/arrow-down.svg";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null);

  const completed = 15;

  const handleOptionClick = (index) => {
    setSelectedOption(index);
    setTimeout(() => {
      navigate("/balance");
    }, 500);
  };

  const handleDropdownOptionClick = () => {
    setTimeout(() => {
      navigate("/balance");
    }, 500);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const dropdownOptions = [
    "Please Select Other Super Funds Here",
    "Active super",
    "AMG",
    "AMIST",
    "ANZ",
    "Australian Ethical Super",
    "Australian Meat Industry Super (AMIST)",
    "AvSuper Fund",
    "Bendigo Bank",
    "Brighter Super",
    "BT Super",
    "BUSSQ",
    "Care Super",
    "Catholic Super",
    "Child Care Super",
    "Christian Super",
    "Clearview",
    "Club Plus Super",
    "Colonial First State (FirstChoice)",
    "Commonwealth Bank Super (CBA)",
    "EISS",
    "Energy Industries Super (EISS)",
    "Equipsuper",
    "ESS Super",
    "Defined Benefit (Any Fund)",
    "First Super",
    "Government Employees Superannuation Board (GESB)",
    "Grow Super",
    "Guild Super",
    "Hesta Super",
    "ING Super",
    "InTrust",
    "IOOF",
    "Kogan Super",
    "Legal Super",
    "LGIA Super",
    "Lutheran Super",
    "Macquarie",
    "MAP",
    "Maritime Super",
    "Meat Industry Employees Super (MIESF)",
    "Media Super",
    "Mercer Super Trust",
    "Military Super",
    "Mine Super",
    "Nationwide Super",
    "NESS Super",
    "Netwealth",
    "NEXT Super",
    "NGS Super",
    "OnePath",
    "OneSuper",
    "Perpetual",
    "Prime Super",
    "Public Sector Superannuation (PSSap)",
    "Qantas Super",
    "Rei Super",
    "Retirement Wrap",
    "Smart Future Trust",
    "Smart Monday",
    "Smart MondaySuper SA",
    "SmartSave",
    "SmartStart Super",
    "SMSF",
    "Spaceship Super",
    "Spirit Super",
    "SPSL Master Trust",
    "Statewide",
    "Suncorp Super",
    "Superestate",
    "Superhero",
    "Telstra Super",
    "TWU Super",
    "Unisuper",
    "Vanguard Super",
    "Verve Super",
    "VicSuper",
    "Virgin Money",
    "Vision Super",
    "Zurich",
    "Other",
  ];

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
      <div
        className="__dropdown__arrow"
        onClick={(e) => {
          toggleDropdown();
          e.stopPropagation();
        }}
        style={{ cursor: "pointer" }}
      >
        <div>Please select other super funds here</div>
        <img src={dropDown} alt="dropDown" />
      </div>
      {isDropdownVisible && (
        <div className="__dropdown" ref={dropdownRef}>
          {dropdownOptions.map((option, index) => (
            <div
              key={index}
              className="__dropdown-option"
              onClick={handleDropdownOptionClick}
            >
              {option}
            </div>
          ))}
        </div>
      )}
      <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
    </div>
  );
};

export default Form;
