import "./footer.css";
import logoImage from "../../assets/logo3.svg";

const Footer = () => {
  return (
    <div className="__footer">
      <div className="__logo__div">
        <img src={logoImage} alt="Logo" />
      </div>
      <div className="__vastion">Vastion Private Wealth PTY LTD © 2023</div>
      <div className="__vastion__private">
        Vastion Private Wealth PTY LTD{" "}
        <span className="__span">(ABN: 19 673 234 181)</span> is a Corporate
        Authorised Representative of Superfast AM Pty Ltd{" "}
        <span className="__span">(ACN: 111 281 013; AFSL No. 283 043)</span>.{" "}
        <br /> <br />
        The information provided on and made available through this website is
        general in nature and has been prepared without taking into account your
        objectives, financial situation <br /> or needs – it may not be
        appropriate to your situation. Because of that, you should, before
        acting on this information, consider its appropriateness with regard to
        those things. <br /> The information provided should not be construed as
        financial, taxation, or legal advice. <br /> <br />
        We recommend that you obtain your own independent professional advice
        before making any decision in relation to your particular requirements
        or circumstances.Before <br />
        acquiring any financial product, you should obtain the relevant Product
        Disclosure Statement (PDS) for any product mentioned and consider its
        contents before making any <br />
        decision. Past performance of any product discussed on this website is
        not indicative of future performance. We do not warrant that any future
        forecasts are guaranteed to occur.
      </div>
      <div className="__reserved">© 2023 All rights reserved.</div>
    </div>
  );
};

export default Footer;
