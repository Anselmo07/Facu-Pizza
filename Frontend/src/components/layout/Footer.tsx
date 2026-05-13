import "./Footer.css";

import logo from "../../assets/logo3.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo */}
        <div className="footer__logo">
          <img src={logo} alt="Pizzería Logo" />
        </div>

        {/* Links */}
        <div className="footer__links">
          <div className="footer__row">
            <a href="#menu">Menu</a>
            <a href="#">Catering</a>
            <a href="#">Franchise</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </div>

          <div className="footer__row footer__small">
            <a href="#">Terms to Text Service</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Sitemap</a>
          </div>
        </div>

        {/* Right side */}
        <div className="footer__right">
          <div className="footer__icons">
            <div className="circle">📍</div>
            <div className="circle">✉️</div>
            <div className="circle">🛒</div>
          </div>

          <button className="footer__button">
            Submit A Request
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;