import "./Footer.css";

import logo from "../../assets/logo3.png";
import locationImg from "../../assets/location.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">

        {/* LOGO */}
        <div className="footer__logo">
          <img src={logo} alt="Pizzería Logo" />
        </div>

        {/* LINKS */}
        <div className="footer__links">
          <div className="footer__row">
            <a href="#menu">Menu</a>
            <a href="#about">About</a>
            <a href="#location">Location</a>
            <a href="#">Catering</a>
            <a href="#">Contact</a>
          </div>

          <div className="footer__row footer__small">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Support</a>
          </div>
        </div>

        {/* UBICACION */}
        <a
          href="https://maps.google.com"
          target="_blank"
          className="footer__location"
        >
          <img
            src={locationImg}
            alt="Ubicación"
          />

          <span>Our Location</span>
        </a>

        {/* HORARIOS */}
        <div className="footer__hours">
          <h3>Opening Hours</h3>

          <div className="hours__grid">
            <span>Mon - Fri</span>
            <span>10:00 - 23:00</span>

            <span>Saturday</span>
            <span>11:00 - 01:00</span>

            <span>Sunday</span>
            <span>12:00 - 22:00</span>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer__right">
          <div className="footer__icons">
            <div className="circle">📍</div>
            <div className="circle">✉️</div>
            <div className="circle">🛒</div>
          </div>

          <button className="footer__button">
            Order Online
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;