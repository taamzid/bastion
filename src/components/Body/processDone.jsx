// import { useState } from "react";
import "./form.css";
import ProgressBar from "@ramonak/react-progress-bar";
import arrowImage from "../../assets/arrowIcon.svg";
import BodyBg from "./bodyBg";
import processDone from "../../assets/processDone.svg";

const ProcessDone = () => {
  const completed = 100;

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
        <div className="__process__done">
          <img src={processDone} alt="processDone" />
        </div>
        <img src={arrowImage} alt="arrowImage" className="__arrowIcon" />
      </div>
    </div>
  );
};

export default ProcessDone;
