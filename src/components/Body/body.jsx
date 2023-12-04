import tickCircle from "../../assets/tick-circle.svg";
import customers from "../../assets/customers.svg";
import stars from "../../assets/star-fill.svg";
import "./body.css";

const Body = () => {
  return (
    <div className="__body">
      <div className="__is">
        Is Your Super Fund Performing <br />
        In 2023?
      </div>
      <div className="__claim">
        Claim Your Free Superannuation Performance Review
      </div>
      <div className="__cnt">
        <span className="__compare">
          <img src={tickCircle} alt="tickCircle" />
          <div>Compare Your Super</div>
        </span>
        <span className="__compare">
          <img src={tickCircle} alt="tickCircle" />
          <div>No Cost, Obligation Free</div>
        </span>
        <span className="__compare">
          <img src={tickCircle} alt="tickCircle" />
          <div>Takes Less Than 60 Seconds</div>
        </span>
      </div>
      <div className="__customers">
        <img src={customers} alt="customers" />
        <div>
          <div className="__stars">
            <img src={stars} alt="stars" />
            <img src={stars} alt="stars" />
            <img src={stars} alt="stars" />
            <img src={stars} alt="stars" />
            <img src={stars} alt="stars" />
          </div>
          <div className="__1275">1275 Satisfied Customer</div>
        </div>
      </div>
    </div>
  );
};

export default Body;
