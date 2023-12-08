/* eslint-disable react/no-unescaped-entities */
import "./form.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import arrowImage from "../../assets/arrowIcon.svg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import BodyBg from "./bodyBg";
import DataContext from "../Context/dataContext";

const Email = () => {
  const isSmallScreen = window.innerWidth <= 767;
  const { selectedBalance, selectedName } = useContext(DataContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (
  //       selectedBalance === "$0 - $49,000" ||
  //       selectedBalance === "$50,000 - $99,000"
  //     ) {
  //       navigate("/process-failed");
  //     } else {
  //       navigate("/process-done");
  //     }
  //   }, 500);
  // }, [navigate, selectedBalance]);

  //   const [age, setAge] = useState("");
  //   const [isUnder18, setIsUnder18] = useState(false);
  //   const [isBlank, setIsBlank] = useState(false);
  //   const [isNotNumber, setIsNotNumber] = useState(false);

  const handleNextClick = () => {
    // if (age.trim() === "") {
    //   setIsBlank(true);
    //   setIsUnder18(false);
    //   setIsNotNumber(false);
    //   return;
    // }

    // if (parsedAge < 18) {
    //   setIsUnder18(true);
    //   setIsNotNumber(false);
    //   setIsBlank(false);
    // } else {
    //   setIsUnder18(false);
    //   setIsNotNumber(false);
    //   navigate("/state");
    // }
    setTimeout(() => {
      if (
        selectedBalance === "$0 - $49,000" ||
        selectedBalance === "$50,000 - $99,000"
      ) {
        navigate("/process-failed");
      } else {
        navigate("/process-done");
      }
    }, 500);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleNextClick();
    }
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
              Thanks {selectedName}!
              <br />
              Let's Arrange the Best Way to Deliver Your Personalised Review.
            </div>

            <div className="__age__input">
              <input
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Your Email"
                className="__input"
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="__age__input">
              <input
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                placeholder="Contact Number"
                className="__input"
                // onKeyPress={handleKeyPress}
              />
            </div>
            <br />
            <div className="__next" onClick={handleNextClick}>
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
              Thanks {selectedName}!
              <br />
              Let's Arrange the Best Way to Deliver Your Personalised Review.
            </div>

            <div className="__age__input">
              <input
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                placeholder="Enter Your Email"
                className="__input"
                onKeyPress={handleKeyPress}
              />
            </div>
            <div className="__age__input">
              <input
                // value={age}
                // onChange={(e) => setAge(e.target.value)}
                placeholder="Contact Number"
                className="__input"
                onKeyPress={handleKeyPress}
              />
            </div>
            <br />
            <br />
            <br />
            <div className="__next" onClick={handleNextClick}>
              Next
            </div>
            <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
          </div>
        </div>
      )}
    </>
  );
};

export default Email;
