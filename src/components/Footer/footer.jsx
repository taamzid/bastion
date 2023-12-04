import "./footer.css"; // Assuming you have a CSS file for your footer
import footerImage from "../../assets/footer.svg";
import logoImage from "../../assets/logo3.svg"; // Replace with the path to your logo image

const Footer = () => {
  return (
    <div className="footer-container">
      <img
        src={footerImage}
        alt="Footer Background"
        className="footer-background"
      />
      <div className="logo-container">
        <img src={logoImage} alt="Logo" className="logo" />
        <h1>Vastion Private Wealth PTY LTD © 2023</h1>
        <p>
          Vastion Private Wealth PTY LTD (ABN: 19 673 234 181) is a Corporate
          Authorised Representative of Superfast AM Pty Ltd (ACN: 111 281 013;
          AFSL No. 283 043). The information provided on and made available
          through this website is general in nature and has been prepared
          without taking into account your objectives, financial situation or
          needs – it may not be appropriate to your situation. Because of that,
          you should, before acting on this information, consider its
          appropriateness with regard to those things. The information provided
          should not be construed as financial, taxation, or legal advice.We
          recommend that you obtain your own independent professional advice
          before making any decision in relation to your particular requirements
          or circumstances. Before acquiring any financial product, you should
          obtain the relevant Product Disclosure Statement (PDS) for any product
          mentioned and consider its contents before making any decision. Past
          performance of any product discussed on this website is not indicative
          of future performance. We do not warrant that any future forecasts are
          guaranteed to occur.
        </p>
      </div>
    </div>
  );
};

export default Footer;
